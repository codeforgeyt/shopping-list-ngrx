import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { ShoppingItem } from '../../models/shoppingItem';
import * as ShoppingAction from '../../store/actions/shopping.actions';
import { ShoppingState } from '../../store/reducers/shopping.reducer';
import * as ShoppinSelector from '../../store/selectors/shopping.selectors';
import { ShoppingAddModalComponent } from '../shopping-add-modal/shopping-add-modal.component';
import { ShoppingEditModalComponent } from '../shopping-edit-modal/shopping-edit-modal.component';

@Component({
  selector: 'cf-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<ShoppingItem>;


  constructor(
    private store: Store<ShoppingState>,
    public dialog: MatDialog) {
    this.displayedColumns = ['name', 'quantity', 'actions'];
  }

  ngOnInit() {
    this.getShoppingList();
  }

  private getShoppingList() {
    this.store.dispatch(ShoppingAction.getShoppingItems());
    // Option 1:
    // this.store.pipe(select('shoppingState', 'shoppingList')).subscribe((shopping) => {
    //   this.dataSource = new MatTableDataSource<ShoppingItem>(shopping);
    // });

    // Option 2:
    this.store.pipe(select(ShoppinSelector.selectShoppingList)).subscribe((shopping) => {
      this.dataSource = new MatTableDataSource<ShoppingItem>(shopping);
    });
  }

  addShoppingItem() {
    const dialogRef = this.openAddShoppingItem();
    this.handleAddFinish(dialogRef);
  }

  private openAddShoppingItem() {
    return this.dialog.open(ShoppingAddModalComponent, {
      width: '300px',
    });
  }

  private handleAddFinish(dialogRef) {
    dialogRef.afterClosed().subscribe((shoppingItemToAdd: ShoppingItem) => {
      if (shoppingItemToAdd !== undefined) {
        this.store.dispatch(ShoppingAction.addShoppingItem({ shoppingItem: shoppingItemToAdd }));
      }
    });
  }

  editShoppingItem(shoppingItemToEdit: ShoppingItem) {
    const dialogRef = this.openEditShoppingItem(shoppingItemToEdit);
    this.handleEditFinish(dialogRef);
  }

  private openEditShoppingItem(shoppingItemToEdit: ShoppingItem) {
    return this.dialog.open(ShoppingEditModalComponent, {
      width: '300px',
      data: { ...shoppingItemToEdit }
    });
  }

  private handleEditFinish(dialogRef) {
    dialogRef.afterClosed().subscribe((editedShoppingItem: ShoppingItem) => {
      if (editedShoppingItem !== undefined) {
        this.store.dispatch(ShoppingAction.editShoppingItem({ shoppingItem: editedShoppingItem }));
      }
    });
  }

  deleteShoppingItem(shoppingItemToDelete: ShoppingItem) {
    this.store.dispatch(ShoppingAction.deleteShoppingItem({ shoppingItem: shoppingItemToDelete }));
  }
}

