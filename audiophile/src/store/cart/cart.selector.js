import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;


export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)


export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)


export const selectCartTotalAmount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
);


// // newCartTotalAmount
// const newCartTotalAmount = newCartItems.reduce((total, currentItem) => total + (currentItem.quantity * currentItem.price), 0);
// // newCartTotal
// const newCartTotal = newCartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
