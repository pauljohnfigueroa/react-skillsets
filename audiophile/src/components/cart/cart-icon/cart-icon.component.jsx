import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/images/icon-cart.svg';
import { CartContext } from '../../../contexts/cart.context';


const CartIcon = ({ cartItemsTotal }) => {
    // Context {value}
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (<>
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-cart-icon" onClick={toggleIsCartOpen} />
            <span className="item-count">{cartItemsTotal}</span>
        </div>
    </>);
}

export default CartIcon;