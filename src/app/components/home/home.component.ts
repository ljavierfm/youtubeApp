import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private nextPageToken='';
  videos:any[]=[];

  constructor(private _yts:YoutubeService) {
    this.getVideos();
   }

  ngOnInit() {
  }

  getVideos(){
    this._yts.getVideos().subscribe(data => {

      this.nextPageToken = data['nextPageToken'];

      for (let video of data['items']) {
        let snippet = video['snippet'];
        this.videos.push(snippet);
      }
    });
  }

}
