import { Component, Input, OnInit } from '@angular/core';
import GRAB_BAG from '../../assets/grabbag.json';
import { GrabBagEntry } from '../shared/models/entry.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {}
}
