import { useContext } from 'react';

import { ReactComponent as AudiophileLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MobileNavIcon } from '../../assets/images/icon-hamburger.svg';

import CartIcon from "../../components/cart/cart-icon/cart-icon.component";
import CartDropDown from '../cart/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';

import { UserContext } from '../../contexts/user.context';

import { Outlet, Link } from 'react-router-dom';

import MainNavigation from "../../routes/main-navigation/main-navigation.component";

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Header = () => {

    const { isCartOpen, cartItems } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);

    const cartItemsTotal = cartItems.reduce((sum, current) => sum + current.quantity, 0);

    // replaced by onAuthStateChanged()

    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // }

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="hamburger-icon">
                        <MobileNavIcon />
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <AudiophileLogo />
                        </Link>
                    </div>
                    <MainNavigation />
                    <CartIcon cartItemsTotal={cartItemsTotal} />
                    <div>
                        {
                            currentUser ?
                                <Link onClick={signOutUser} >Sign Out</Link> :
                                <Link to="/authenticate">Sign In</Link>
                        }
                    </div>
                </div>
            </header>
            <Outlet />
            {isCartOpen && <CartDropDown />}
        </>

    );
}
export default Header;