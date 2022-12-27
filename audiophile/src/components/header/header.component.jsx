import { useContext } from 'react';

import { ReactComponent as AudiophileLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MobileNavIcon } from '../../assets/images/icon-hamburger.svg';

import CartIcon from "../../components/cart/cart-icon/cart-icon.component";
import CartDropDown from '../cart/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

import { Outlet, Link } from 'react-router-dom';

import MainNavigation from "../../routes/main-navigation/main-navigation.component";

const Header = () => {
    const { isCartOpen } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
    //console.log(currentUser);
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
                    <CartIcon />
                    <div>
                        {
                            currentUser ?
                                <Link to="/sign-out">Sign Out</Link> :
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