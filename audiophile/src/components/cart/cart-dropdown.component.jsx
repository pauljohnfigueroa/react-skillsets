import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "./cart-item/cart-item.component";

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <>
            <section class="cart-modal">
                <aside class="cart">
                    <div class="heading-container">
                        <h2 class="heading">Cart<span>({cartItems.length})</span></h2>
                        <a href="#">Remove all</a>
                    </div>

                    <CartItem cartItems={cartItems} />

                    <div class="button-container">
                        <button>Checkout</button>
                    </div>
                </aside>
            </section>
        </>
    );
}
export default CartDropDown;