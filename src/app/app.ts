import { Component } from '@angular/core';
import { ListItem } from './models/list-item.interface';
import { ListItemService } from './services/list-item.service';
import { BehaviorSubject, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected listItems: ListItem[] | null = null;

  protected loading$ = new BehaviorSubject<boolean>(false);

  constructor(private listItemService: ListItemService) {}

  protected loadItems(): void {
    this.loading$.next(true);
    this.listItemService
      .getListItems()
      .pipe(tap(() => this.loading$.next(false)))
      .subscribe((items) => (this.listItems = items));
  }
}
