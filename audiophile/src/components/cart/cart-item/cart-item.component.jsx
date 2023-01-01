import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

const CartItem = ({ cartItems }) => {

    const { addItemToCart, removeITemToCart } = useContext(CartContext);

    if (cartItems.length) {
        return (
            cartItems.map((cartItem) => {
                return (
                    <>
                        <div key={cartItem.id} class="item-row">
                            <div class="item-image-container">
                                <img src={cartItem.thumbnail} alt="" />
                            </div>

                            <div className="item-details">
                                <div className="item-title-price">
                                    <p className="item-title">{cartItem.name}</p>
                                    <p className="item-price">${cartItem.price}</p>
                                </div>

                                <form action="#">
                                    <div className="quantity-nav">
                                        <div className="quantity-button quantity-down" onClick={() => removeITemToCart(cartItem)}>-</div>
                                    </div>
                                    <input type="number" min="0" value={cartItem.quantity} className="quantity" />
                                    <div className="quantity-nav">
                                        <div className="quantity-button quantity-up" onClick={() => addItemToCart(cartItem)}>+</div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <p>remove</p>
                            </div>
                        </div>
                    </>
                );

            })
        );
    } else {
        return <h2>Your cart is empty.</h2>
    }
}


export default CartItem;