import { ReactComponent as AudiophileLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MobileNavIcon } from '../../assets/images/icon-hamburger.svg';
import { ReactComponent as CartIcon } from '../../assets/images/icon-cart.svg';

import { Outlet, Link } from 'react-router-dom';

import MainNavigation from "../../routes/main-navigation/main-navigation.component";

import '../../assets/css/categories.scss';

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="hamburger-icon">
                        <MobileNavIcon />
                    </div>

                    <Link to="/">
                        <div className="logo">
                            <AudiophileLogo />
                        </div>
                    </Link>

                    <MainNavigation />
                    <div className="cart-icon">
                        <CartIcon />
                    </div>
                </div>
            </header>
            <Outlet />
        </>

    );
}
export default Header;