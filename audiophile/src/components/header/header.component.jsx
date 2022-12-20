import { useContext } from 'react';

import { ReactComponent as AudiophileLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MobileNavIcon } from '../../assets/images/icon-hamburger.svg';
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropDown from '../cart/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

import { Outlet, Link } from 'react-router-dom';

import MainNavigation from "../../routes/main-navigation/main-navigation.component";

const Header = () => {
    const { isCartOpen } = useContext(CartContext);

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
                    <div>Sign In</div>
                </div>
            </header>
            <Outlet />
            {isCartOpen && <CartDropDown />}
        </>

    );
}
export default Header;