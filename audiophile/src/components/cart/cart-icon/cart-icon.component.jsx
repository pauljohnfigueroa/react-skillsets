import { ReactComponent as ShoppingIcon } from '../../../assets/images/icon-cart.svg';

const CartIcon = () => {
    return (<>
        <div className="cart-icon">
            <ShoppingIcon />
            <span>0</span>
        </div>
    </>);
}

export default CartIcon;