import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const CheckOut = () => {
    return (
        <>
            <section class="checkout">

                <section class="checkout-form">
                    <h2>Checkout</h2>
                    <form action="#">

                        <fieldset class="billing-details">
                            <legend>Billing Details</legend>
                            <div class="text-input">
                                <FormInput label="Name" type="text" name="name" id="name" />
                            </div>
                            <div class="text-input">
                                <FormInput label="Email Address" type="email" name="email" id="email" />
                            </div>
                            <div class="text-input">
                                <FormInput label="Phone Number" type="text" name="phone" id="phone" />
                            </div>
                        </fieldset>

                        <fieldset class="shipping-info">
                            <legend>Shipping info</legend>
                            <div class="text-input address">
                                <FormInput label="Address" type="text" name="address" id="address" />
                            </div>
                            <div class="address-details">
                                <div class="text-input">
                                    <FormInput label="Zip Code" type="text" name="zipcode" id="zipcode" />
                                </div>
                                <div class="text-input">
                                    <FormInput label="City" type="text" name="city" id="city" />
                                </div>
                                <div class="text-input">
                                    <FormInput label="Country" type="text" name="country" id="country" />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="payment-details">
                            <legend>Payment Details</legend>
                            <div class="text-input">
                                <label for="">Payment Method</label>
                            </div>
                            <div class="radio-group">
                                <div class="radio-item">
                                    <FormInput label="e-Money" type="radio" id="e-money" name="payment-method" value="e-money" checked />
                                </div>
                                <div class="radio-item">
                                    <FormInput label="Cash on Delivery" type="radio" id="cod" name="payment-method" value="cod" />
                                </div>
                            </div>
                            <div class="text-input">
                                <FormInput label="e-Money Number" type="text" id="e-money-num" name="e-money-num" />
                            </div>
                            <div class="text-input">
                                <FormInput label="e-Money PIN" type="text" id="e-money-pin" name="e-money-pin" />
                            </div>
                        </fieldset>

                    </form>
                </section>

                <section class="checkout-summary">
                    <h2 class="heading">Summary</h2>

                    <div class="item-row">
                        <div class="item-image-container">
                            <img src="./dist/assets/images/product-xx59-headphones/mobile/image-removebg-preview.png" alt="" />
                        </div>

                        <div class="item-details">
                            <div class="item-title-price">
                                <p class="item-title">XX99 MK II</p>
                                <p class="item-price">$ 2,999</p>
                            </div>
                            <p class="item-count">x1</p>
                        </div>

                    </div>

                    <div class="item-row">
                        <div class="item-image-container">
                            <img src="./dist/assets/images/product-xx59-headphones/mobile/image-removebg-preview.png" alt="" />
                        </div>

                        <div class="item-details">
                            <div class="item-title-price">
                                <p class="item-title">XX99 MK II</p>
                                <p class="item-price">$ 2,999</p>
                            </div>
                            <p class="item-count">x1</p>
                        </div>

                    </div>

                    <div class="item-row">
                        <div class="item-image-container">
                            <img src="./dist/assets/images/product-xx59-headphones/mobile/image-removebg-preview.png" alt="" />
                        </div>

                        <div class="item-details">
                            <div class="item-title-price">
                                <p class="item-title">XX99 MK II</p>
                                <p class="item-price">$ 2,999</p>
                            </div>
                            <p class="item-count">x1</p>
                        </div>

                    </div>

                    <div class="item-row">
                        <div class="item-image-container">
                            <img src="./dist/assets/images/product-xx59-headphones/mobile/image-removebg-preview.png" alt="" />
                        </div>

                        <div class="item-details">
                            <div class="item-title-price">
                                <p class="item-title">XX99 MK II</p>
                                <p class="item-price">$ 2,999</p>
                            </div>
                            <p class="item-count">x1</p>
                        </div>

                    </div>

                    <div class="price-details">
                        <div class="price-row">
                            <p class="label">Total</p>
                            <p class="price">$ 5,000</p>
                        </div>
                        <div class="price-row">
                            <p class="label">Shipping</p>
                            <p class="price">$ 50</p>
                        </div>
                        <div class="price-row">
                            <p class="label">VAT(Included)</p>
                            <p class="price">$ 1,070</p>
                        </div>
                        <div class="price-row">
                            <p class="label">Grand Total</p>
                            <p class="price">$ 5,446</p>
                        </div>

                    </div>

                    <div class="button-container">
                        <Button label="Continue & Pay" type="button" />
                    </div>

                </section>

            </section>
        </>
    );
}
export default CheckOut;