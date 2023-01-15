import { createAction } from "../../utils/reducer/create-action.reducer";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addCartItem = (cartItems, productToAdd) => {
    // check if productToAdd exists in cartItems;
    const existingItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    // if it exists, update quantity
    if (existingItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        )
    }
    // else, it means that this is a new product, set the quantity to 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}


export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } :
        cartItem
    )
}


export const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)


export const addItemToCart = (cartItems, productToAdd) => {
    // setCartItems(addCartItem(cartItems, productToAdd));
    const newCartItem = addCartItem(cartItems, productToAdd);
    // updateCartItemsReducer(newCartItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // setCartItems(removeCartItem(cartItems, cartItemToRemove));
    const newCartItem = removeCartItem(cartItems, cartItemToRemove);
    // updateCartItemsReducer(newCartItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}


export const clearItemFromCart = (cartItems, cartItemToClear) => {
    // setCartItems(clearCartItem(cartItems, cartItemToClear));
    const newCartItem = clearCartItem(cartItems, cartItemToClear);
    // updateCartItemsReducer(newCartItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}