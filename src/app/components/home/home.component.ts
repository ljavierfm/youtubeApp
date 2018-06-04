import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private nextPageToken='';
  videos:any[]=[];
  videoSeleccionado:any;

  constructor(private _yts:YoutubeService) {
    this.getVideos();
   }

  ngOnInit() {
  }

  getVideos(){
    this._yts.getVideos(this.nextPageToken).subscribe(data => {

      this.nextPageToken = data['nextPageToken'];

      for (let video of data['items']) {
        let snippet = video['snippet'];
        this.videos.push(snippet);
      }
    });

    console.log(this.videos);

  }

  verVideo(video:any){
    this.videoSeleccionado=video;
    console.log(this.videoSeleccionado);
    $('#exampleModal').modal();
  }

  cerrarModal(){
    this.videoSeleccionado=null;
    $('#exampleModal').modal('hide');
  }

  cargarMas(){
    this.getVideos();
  }

}
