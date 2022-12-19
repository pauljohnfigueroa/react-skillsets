import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/images/icon-cart.svg';
import { CartContext } from '../../../contexts/cart.context';


const CartIcon = () => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (<>
        <div className="cart-icon">
            <ShoppingIcon onClick={toggleIsCartOpen} />
            <span>0</span>
        </div>
    </>);
}

export default CartIcon;