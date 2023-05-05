import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = []
  private apiKey: string = 'A4kbzj0C9QDXKopPXI7v96ly76WwS09e';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {
    this.getLocalStorage()
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  organizeHistory(tag: string) {
    tag = tag.toLowerCase()
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);

    this._tagsHistory = this.tagsHistory.splice(0, 10)
    this.saveLocalStorage()
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }
  private getLocalStorage() {
    if (!localStorage.getItem('history')) return
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)
    // const resStorage = localStorage.getItem('history')
    if (this._tagsHistory.length === 0) return
    this.searchTag(this.tagsHistory[0])
  }

  searchTag(tag: string): void {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)
    if (tag.length === 0) return
    this.organizeHistory(tag)
    // const res = await fetch('https://api.giphy.com/v1/gifs/search?api_key=A4kbzj0C9QDXKopPXI7v96ly76WwS09e&limit=10&q=Overwatch')


    const res = this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
    res.subscribe((response) => {
      this.gifList = response.data
      console.log({ gifs: this.gifList });


    })


  }
}
