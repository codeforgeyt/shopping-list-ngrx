import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShoppingItem } from '../../models/shoppingItem';

@Component({
  selector: 'cf-shopping-add-modal',
  templateUrl: './shopping-add-modal.component.html',
  styleUrls: ['./shopping-add-modal.component.scss']
})
export class ShoppingAddModalComponent implements OnInit {

  shoppingItemToAdd: ShoppingItem;

  constructor(public dialogRef: MatDialogRef<ShoppingAddModalComponent>) { }

  ngOnInit() {
    this.shoppingItemToAdd =  new ShoppingItem('', 0);
  }


  closeDialog() {
    this.dialogRef.close();
  }

  addShoppingItem() {
    this.dialogRef.close(this.shoppingItemToAdd);
  }
}
