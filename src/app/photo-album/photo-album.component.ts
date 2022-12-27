import { Component, OnInit } from '@angular/core';
import PHOTOS from '../../assets/images.json';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss'],
})
export class PhotoAlbumComponent implements OnInit {
  public photoList: string[]=[];
  constructor() {}

  ngOnInit(): void {
    PHOTOS.forEach((photo) => {
      this.photoList.push('../../assets/img/' + photo + '.jpg');
    });
  }
}
