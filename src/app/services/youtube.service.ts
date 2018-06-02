import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_KEY } from '../config';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl:string ='https://www.googleapis.com/youtube/v3';

  constructor(private http:HttpClient) { }

  getVideos(){
    let url = `${this.youtubeUrl}/playlistItems`;
    let params=new HttpParams().set('part','snippet').set('maxResults','12').set('playlistId','UU7xYS30lwFpT6mr07Qz6zRw').set('key',API_KEY);

    return this.http.get(url,{params:params});

  }
}
