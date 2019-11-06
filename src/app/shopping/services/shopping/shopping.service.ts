import { Injectable } from '@angular/core';
import { ShoppingItem } from '../../models/shoppingItem';
import { VirtualTimeScheduler, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppingList: ShoppingItem[] = [];

  constructor() {
    this.shoppingList = [
      { id: 1, name: 'Shampoo', quantity: 2 },
      { id: 2, name: 'Pyjama', quantity: 1 },
      { id: 3, name: 'Toothpaste', quantity: 1 },
      { id: 4, name: 'Coffee', quantity: 1 },
    ];
  }

  getShoppings(): Observable<ShoppingItem[]> {
    return of(this.shoppingList.sort((a: ShoppingItem, b: ShoppingItem) => a.name > b.name ? 1 : -1));
  }

  add(shoppingItem: ShoppingItem): Observable<ShoppingItem> {
    this.shoppingList.push(shoppingItem);
    return of(shoppingItem);
  }

  delete(shoppingItem: ShoppingItem): Observable<ShoppingItem> {
    this.shoppingList = this.shoppingList.filter((item: ShoppingItem) => item.id !== shoppingItem.id);
    return of(shoppingItem);
  }

  edit(shoppingItem: ShoppingItem): Observable<ShoppingItem> {
    this.shoppingList.forEach((item: ShoppingItem) => {
      if (item.id === shoppingItem.id) {
        Object.assign(item, { ...shoppingItem });
      }
    });
    return of(shoppingItem);
  }
}
