import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('btnHistory')
  public txtHistory!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) { }

  get tags() {
    return this.gifsService.tagsHistory
  }

  sendToSearch(tag: string) {
    console.log({ tag });
    this.gifsService.searchTag(tag)
  }
}
