import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = []
  private apiKey: string = 'A4kbzj0C9QDXKopPXI7v96ly76WwS09e';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) { }

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
  }

  searchTag(tag: string): void {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)
    if (tag.length === 0) return
    this.organizeHistory(tag)
    // const res = await fetch('https://api.giphy.com/v1/gifs/search?api_key=A4kbzj0C9QDXKopPXI7v96ly76WwS09e&limit=10&q=Overwatch')


    const res = this.http.get(`${this.serviceUrl}/search`, { params })
    res.subscribe(response => {
      console.log(response);

    })


  }
}
