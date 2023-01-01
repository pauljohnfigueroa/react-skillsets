import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } :
        cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeITemToCart: () => { },
    clearItemFromCart: () => { },
    cartTotal: 0,
    cartTotalAmount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
        setCartTotal(total);

        const totalAmount = cartItems.reduce((totalAmount, currentItem) => totalAmount + (currentItem.quantity * currentItem.price), 0);
        setCartTotalAmount(totalAmount);
    }, [cartItems, cartTotalAmount]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeITemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeITemToCart,
        clearItemFromCart,
        cartTotal,
        cartTotalAmount,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}