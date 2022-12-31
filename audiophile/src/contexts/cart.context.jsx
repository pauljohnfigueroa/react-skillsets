import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // check if product to add already exists in the database
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // check if the product to add actually exists then 
    // if yes, just increase the quantity
    // if no, return the current cartItems.
    if (existingItem) {
        console.log("existing");
        // array.map returns true or false
        // just update the quantity existing item which evaluates to true.
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    console.log("return");
    console.log("productToAdd in addCartItem => ", productToAdd);
    // if this is a new cart Item, just set the quantity to 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        console.log('productToAdd in addItemToCart => ', productToAdd);
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };


    // access in cart-dropdown as 
    // const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}