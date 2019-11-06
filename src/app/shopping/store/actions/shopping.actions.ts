import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../../models/shoppingItem';

export const getShoppingItems = createAction('[ShoppingList Component] Get shopping items');
export const shoppingItemsLoaded = createAction(
    '[Shopping service] Shopping Items Loaded Success', props<{ shoppingItems: ShoppingItem[] }>()
);

export const addShoppingItem = createAction('[ShoppingList Component] Add shopping item', props<{ shoppingItem: ShoppingItem }>());
export const shoppingItemAdded = createAction('[ShoppingList Component] Shopping item added', props<{ shoppingItem: ShoppingItem }>());

export const editShoppingItem = createAction('[ShoppingList Component] Edit shopping item', props<{ shoppingItem: ShoppingItem }>());
export const shoppingItemEdited = createAction('[ShoppingList Component] Shopping item edited', props<{ shoppingItem: ShoppingItem }>());

export const deleteShoppingItem = createAction('[ShoppingList Component] Delete shopping item', props<{ shoppingItem: ShoppingItem }>());
export const shoppingItemDeleted = createAction('[ShoppingList Component]  Shopping item deleted', props<{ shoppingItem: ShoppingItem }>());

