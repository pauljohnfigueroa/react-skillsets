import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

import CartItem from "./cart-item/cart-item.component";

const CartDropDown = () => {

    const { isCartOpen, setIsCartOpen, cartItems, cartTotal } = useContext(CartContext);
    // toggle
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        toggleIsCartOpen();
        navigate('/checkout');
    }

    return (
        <>
            <section className="cart-modal">
                <aside className="cart">
                    <div className="heading-container">
                        <h2 className="heading">Cart<span>({cartTotal})</span></h2>
                        <a href="http://">Remove all</a>
                    </div>

                    <CartItem cartItems={cartItems} />

                    <div className="button-container">
                        <Button label="Checkout" type="button" onClick={goToCheckOutHandler} />
                    </div>
                </aside>
            </section>
        </>
    );
}
export default CartDropDown;