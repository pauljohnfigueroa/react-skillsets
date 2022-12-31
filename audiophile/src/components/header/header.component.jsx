import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as AudiophileLogo } from '../../assets/images/logo.svg';
import { ReactComponent as MobileNavIcon } from '../../assets/images/icon-hamburger.svg';

import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

import CartIcon from "../../components/cart/cart-icon/cart-icon.component";
import CartDropDown from '../cart/cart-dropdown.component';
import MainNavigation from "../../routes/main-navigation/main-navigation.component";

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Header = () => {

    const { isCartOpen } = useContext(CartContext);
    const { currentUser } = useContext(UserContext);
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
                    <CartIcon />
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