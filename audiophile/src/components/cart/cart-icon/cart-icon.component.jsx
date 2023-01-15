//import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/images/icon-cart.svg';
//import { CartContext } from '../../../contexts/cart.context';

import { selectIsCartOpen, selectCartTotal } from '../../../store/cart/cart.selector';
import { setIsCartOpen } from '../../../store/cart/cart.action';


const CartIcon = () => {

    const dispatch = useDispatch();

    // Context {value}
    // const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const cartTotal = useSelector(selectCartTotal);
    const isCartOpen = useSelector(selectIsCartOpen);

    // toggle
    // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-cart-icon" onClick={toggleIsCartOpen} />
            <span className="item-count">{cartTotal}</span>
        </div>
    );
}

export default CartIcon;