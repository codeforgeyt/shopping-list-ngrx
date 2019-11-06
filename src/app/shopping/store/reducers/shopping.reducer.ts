import { ShoppingItem } from '../../models/shoppingItem';
import { createReducer, on, Action } from '@ngrx/store';
import * as ShoppingAction from '../actions/shopping.actions';

export interface ShoppingState {
    shoppingList: ShoppingItem[];
}

export const initialShoppingState: ShoppingState = {
    shoppingList: [
        { id: 1, name: 'Shampoo', quantity: 2 },
        { id: 2, name: 'Pyjama', quantity: 1 },
        { id: 3, name: 'Toothpaste', quantity: 1 },
        { id: 4, name: 'Coffee', quantity: 1 },
    ],
};

const shoppingReducer = createReducer(
    initialShoppingState,
    on(ShoppingAction.shoppingItemsLoaded, (state, { shoppingItems }) =>
        ({
            ...state,
            shoppingList: shoppingItems
        })
    ),
    on(ShoppingAction.shoppingItemAdded, (state, { shoppingItem }) =>
        ({
            ...state,
            shoppingList: [...state.shoppingList.filter((item) => item.id !== shoppingItem.id), shoppingItem]
        })
        // NOTE: Simple adding to the end of array causes duplicate object when added to empty array
        // ({ ...state, shoppingList: state.shoppingList.concat(shoppingItem) })
    ),
    on(ShoppingAction.shoppingItemEdited, (state, { shoppingItem }) =>
        ({
            ...state,
            shoppingList: [...state.shoppingList.filter((item) => item.id !== shoppingItem.id), shoppingItem]
        })
    ),
    on(ShoppingAction.shoppingItemDeleted, (state, { shoppingItem }) =>
        ({
            ...state,
            shoppingList: [...state.shoppingList.filter((item) => item.id !== shoppingItem.id)]
        })
    )
);

export function createShoppingReducer(shoppingState: ShoppingState, action: Action) {
    return shoppingReducer(shoppingState, action);
}




