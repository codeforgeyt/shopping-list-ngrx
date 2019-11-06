import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingState } from '../reducers/shopping.reducer';

export const selectShoppingState = createFeatureSelector('shoppingState');
export const selectShoppingList = createSelector(selectShoppingState, (shoppingState: ShoppingState) => shoppingState.shoppingList);