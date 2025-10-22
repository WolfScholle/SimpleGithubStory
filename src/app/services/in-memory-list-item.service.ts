import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LIST_ITEMS } from '../../assets/mock-list-items';
import { ListItem } from '../models/list-item.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryListItemService implements InMemoryDbService {
  createDb(): { listItems: ListItem[] } {
    return {
      listItems: LIST_ITEMS,
    };
  }

  genId(listItems: ListItem[]): string {
    return listItems.length > 0
      ? (Math.max(...listItems.map((listIem) => Number(listIem.id))) + 1).toString()
      : '1';
  }
}
