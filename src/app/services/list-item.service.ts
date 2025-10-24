import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../models/list-item.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  constructor(private http: HttpClient) {}

  public getListItems(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>('/api/listItems');
  }
}
