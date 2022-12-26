// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((item) => {
      let giverFirstName: string = '';
      let giverLastName: string = '';
      let receiverFirstName: string = '';
      let receiverLastName: string = '';
      let yearStr: string = '';

      if (item.giver) {
        if (item.giver.first_name) {
          giverFirstName = item.giver.first_name
            .replace(/\ /g, '')
            .toLocaleLowerCase();
        }
        if (item.giver.last_name) {
          giverLastName = item.giver.last_name
            .replace(/\ /g, '')
            .toLocaleLowerCase();
        }
      }
      if (item.receiver) {
        if (item.receiver.first_name) {
          receiverFirstName = item.receiver.first_name
            .replace(/\ /g, '')
            .toLocaleLowerCase();
        }
        if (item.receiver.last_name) {
          receiverLastName = item.receiver.last_name
            .replace(/\ /g, '')
            .toLocaleLowerCase();
        }
      }
      if (item.year) {
        yearStr = item.year.toString().replace(/\ /g, '').toLocaleLowerCase();
      }

      let text: string = searchText.replace(/\ /g, '') || '';

      if (giverFirstName && giverFirstName.includes(text)) {
        return true;
      }
      if (giverLastName && giverLastName.includes(text)) {
        return true;
      }
      if (receiverFirstName && receiverFirstName.includes(text)) {
        return true;
      }
      if (receiverLastName && receiverLastName.includes(text)) {
        return true;
      }
      if (yearStr && yearStr.includes(text)) {
        return true;
      }

      return undefined;
    });
  }
}
