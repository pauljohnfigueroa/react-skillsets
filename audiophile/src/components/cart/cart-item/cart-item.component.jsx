import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

const CartItem = ({ cartItem }) => {

    const { addItemToCart, removeITemToCart, clearItemFromCart, cartTotal } = useContext(CartContext);

    const addItemFromCartHandler = () => addItemToCart(cartItem)
    const removeITemFromCartHandler = () => removeITemToCart(cartItem);
    const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

    return (
        <>
            <div key={cartItem.id} className="item-row">
                <div className="item-image-container">
                    <img src={cartItem.thumbnail} alt="" />
                </div>

                <div className="item-details">
                    <div className="item-title-price">
                        <p className="item-title">{cartItem.name}</p>
                        <p className="item-price">${cartItem.price}</p>
                    </div>

                    <form action="#">
                        <div className="quantity-nav">
                            <div className="quantity-button quantity-down" onClick={removeITemFromCartHandler}>-</div>
                        </div>
                        <input type="number" min="0" value={cartItem.quantity} className="quantity" />
                        <div className="quantity-nav">
                            <div className="quantity-button quantity-up" onClick={addItemFromCartHandler}>+</div>
                        </div>
                    </form>
                </div>
                <div>
                    <p onClick={clearItemFromCartHandler}>&#10005;</p>
                </div>
            </div>
        </>
    );

}
export default CartItem;