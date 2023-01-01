import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import CartItem from '../cart/cart-item/cart-item.component';

const CheckOut = () => {

    const { cartItems } = useContext(CartContext);

    let cartItemsArray

    if (cartItems.length) {
        cartItemsArray = cartItems.map((cartItem) => <CartItem cartItem={cartItem} />)
    } else {
        cartItemsArray = <h2>Your cart is empty.</h2>
    }

    return (
        <>
            <section className="checkout">

                <section className="checkout-form">
                    <h2>Checkout</h2>
                    <form action="#">

                        <fieldset className="billing-details">
                            <legend>Billing Details</legend>
                            <div className="text-input">
                                <FormInput label="Name" type="text" name="name" id="name" />
                            </div>
                            <div className="text-input">
                                <FormInput label="Email Address" type="email" name="email" id="email" />
                            </div>
                            <div className="text-input">
                                <FormInput label="Phone Number" type="text" name="phone" id="phone" />
                            </div>
                        </fieldset>

                        <fieldset className="shipping-info">
                            <legend>Shipping info</legend>
                            <div className="text-input address">
                                <FormInput label="Address" type="text" name="address" id="address" />
                            </div>
                            <div className="address-details">
                                <div className="text-input">
                                    <FormInput label="Zip Code" type="text" name="zipcode" id="zipcode" />
                                </div>
                                <div className="text-input">
                                    <FormInput label="City" type="text" name="city" id="city" />
                                </div>
                                <div className="text-input">
                                    <FormInput label="Country" type="text" name="country" id="country" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="payment-details">
                            <legend>Payment Details</legend>
                            <div className="text-input">
                                <label htmlFor="">Payment Method</label>
                            </div>
                            <div className="radio-group">
                                <div className="radio-item">
                                    <FormInput label="e-Money" type="radio" id="e-money" name="payment-method" value="e-money" checked />
                                </div>
                                <div className="radio-item">
                                    <FormInput label="Cash on Delivery" type="radio" id="cod" name="payment-method" value="cod" />
                                </div>
                            </div>
                            <div className="text-input">
                                <FormInput label="e-Money Number" type="text" id="e-money-num" name="e-money-num" />
                            </div>
                            <div className="text-input">
                                <FormInput label="e-Money PIN" type="text" id="e-money-pin" name="e-money-pin" />
                            </div>
                        </fieldset>

                    </form>
                </section>

                <section className="checkout-summary">
                    <h2 className="heading">Summary</h2>

                    {cartItemsArray}

                    <div className="price-details">
                        <div className="price-row">
                            <p className="label">Total</p>
                            <p className="price">$ 5,000</p>
                        </div>
                        <div className="price-row">
                            <p className="label">Shipping</p>
                            <p className="price">$ 50</p>
                        </div>
                        <div className="price-row">
                            <p className="label">VAT(Included)</p>
                            <p className="price">$ 1,070</p>
                        </div>
                        <div className="price-row">
                            <p className="label">Grand Total</p>
                            <p className="price">$ 5,446</p>
                        </div>
                    </div>

                    <div className="button-container">
                        <Button label="Continue & Pay" type="button" />
                    </div>

                </section>

            </section>
        </>
    );
}
export default CheckOut;