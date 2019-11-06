import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShoppingService } from '../../services/shopping/shopping.service';
import * as ShoppingAction from '../actions/shopping.actions';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class ShoppingEffects {

    constructor(private actions$: Actions, private shoppingService: ShoppingService) { }

    getShoppingList$ = createEffect(() => this.actions$.pipe(
        ofType(ShoppingAction.getShoppingItems),
        mergeMap(() => this.shoppingService.getShoppings().pipe(
            map(shoppingItems => (ShoppingAction.shoppingItemsLoaded({ shoppingItems }))),
            catchError(() => EMPTY)
        ))));

    addShoppingItem$ = createEffect(() => this.actions$.pipe(
        ofType(ShoppingAction.addShoppingItem),
        exhaustMap(action => this.shoppingService.add(action.shoppingItem).pipe(
            map(shoppingItem => (ShoppingAction.shoppingItemAdded({ shoppingItem }))),
            catchError(() => EMPTY)
        ))));

    deleteShoppingItem$ = createEffect(() => this.actions$.pipe(
        ofType(ShoppingAction.deleteShoppingItem),
        exhaustMap(action => this.shoppingService.delete(action.shoppingItem).pipe(
            map(shoppingItem => (ShoppingAction.shoppingItemDeleted({ shoppingItem }))),
            catchError(() => EMPTY)
        ))));

    editShoppingItem$ = createEffect(() => this.actions$.pipe(
        ofType(ShoppingAction.editShoppingItem),
        exhaustMap(action => this.shoppingService.edit(action.shoppingItem).pipe(
            map(shoppingItem => (ShoppingAction.shoppingItemEdited({ shoppingItem }))),
            catchError(() => EMPTY)
        ))));

}
