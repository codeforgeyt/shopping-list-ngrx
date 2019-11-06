import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShoppingItem } from '../../models/shoppingItem';

@Component({
  selector: 'cf-shopping-edit-modal',
  templateUrl: './shopping-edit-modal.component.html',
  styleUrls: ['./shopping-edit-modal.component.scss']
})
export class ShoppingEditModalComponent implements OnInit {

  shoppingItemBeingEdited: ShoppingItem;

  constructor(public dialogRef: MatDialogRef<ShoppingEditModalComponent>, @Inject(MAT_DIALOG_DATA) public data: ShoppingItem) {
    this.shoppingItemBeingEdited = data;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  editShoppingItem() {
    this.dialogRef.close(this.shoppingItemBeingEdited);
  }
}
