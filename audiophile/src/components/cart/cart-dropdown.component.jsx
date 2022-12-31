import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "./cart-item/cart-item.component";

const CartDropDown = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

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
                        <button>Checkout</button>
                    </div>
                </aside>
            </section>
        </>
    );
}
export default CartDropDown;