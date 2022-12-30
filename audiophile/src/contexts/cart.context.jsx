import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    //1.	Find if cartItems contains a productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    //2.	If found/existing product, just increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? [...cartItem, cartItem.quantity + 1]
            : cartItems
        );
    }

    //3.	If product is a new product.
    //      Return a new array with the modified cartItems/new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]
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
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

    // access in cart-dropdown as 
    // const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}