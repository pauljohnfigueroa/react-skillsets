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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {

        const total = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
        setCartTotal(total);

    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartTotal };

    // access in cart-dropdown as 
    // const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}