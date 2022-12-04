import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div>
            <h1>I am the checkout page.</h1>
            {cartItems.map((cartItem) => {
                const { name, id, quantity } = cartItem;
                return (
                    <div ket={id}>
                        <span>{name}</span>
                        <br />
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)}>Increment</span>
                        <br />
                        <span onClick={() => removeItemFromCart(cartItem)}>Decrement</span>
                    </div>
                );
            }
            )}
        </div>
    );
}

export default Checkout;