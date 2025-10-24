import { Component } from '@angular/core';
import { ListItemService } from './services/list-item.service';
import { ListItem } from './models/list-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected listItems: ListItem[] | null = null;

  constructor(private listItemService: ListItemService) {}

  protected loadItems(): void {
    this.listItemService.getListItems().subscribe((items) => this.listItems = items);
  } 
}
