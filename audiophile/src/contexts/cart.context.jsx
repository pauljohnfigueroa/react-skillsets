import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };

    // access in cart-dropdown as 
    // const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}