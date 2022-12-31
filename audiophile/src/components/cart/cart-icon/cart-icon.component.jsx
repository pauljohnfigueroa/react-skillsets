import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/images/icon-cart.svg';
import { CartContext } from '../../../contexts/cart.context';

const CartIcon = () => {
    // Context {value}
    const { isCartOpen, setIsCartOpen, cartTotal } = useContext(CartContext);
    // toggle
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (<>
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-cart-icon" onClick={toggleIsCartOpen} />
            <span className="item-count">{cartTotal}</span>
        </div>
    </>);
}

export default CartIcon;