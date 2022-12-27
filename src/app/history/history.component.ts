import { Component, Input, OnInit } from '@angular/core';
import GRAB_BAG from '../../assets/grabbag.json';
import { GrabBagEntry } from '../shared/models/entry.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public title = 'angular-text-search-highlight';
  @Input() public searchText = '';
  public characters: string[] = [];

  public grabBagEntries: GrabBagEntry[] = [];

  ngOnInit() {
    GRAB_BAG.forEach((entry) => {
      this.grabBagEntries.push({
        year: entry.year,
        key: entry.key,
        giver: {
          first_name: entry.Giver,
        },
        notes: entry.notes,
        receiver: {
          first_name: entry.Receiver,
        },
      });
    });
  }

  public click() {
    console.log('click');
  }
}
