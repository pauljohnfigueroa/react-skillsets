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
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div class="text-input">
                                <label for="email">Email Address</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div class="text-input">
                                <label for="phone">Phone Number</label>
                                <input type="text" name="phone" id="phone" />
                            </div>
                        </fieldset>

                        <fieldset class="shipping-info">
                            <legend>Shipping info</legend>
                            <div class="text-input address">
                                <label for="address">Address</label>
                                <input type="text" name="address" id="address" />
                            </div>
                            <div class="address-details">
                                <div class="text-input">
                                    <label for="zipcode">Zip Code</label>
                                    <input type="text" name="zipcode" id="zipcode" />
                                </div>
                                <div class="text-input">
                                    <label for="city">City</label>
                                    <input type="text" name="city" id="city" />
                                </div>
                                <div class="text-input">
                                    <label for="country">Country</label>
                                    <input type="text" name="country" id="country" />
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
                                    <input type="radio" id="e-money" name="payment-method" value="e-money" checked />
                                    <label for="e-money">e-Money</label>
                                </div>
                                <div class="radio-item">
                                    <input type="radio" id="cod" name="payment-method" value="cod" />
                                    <label for="cod">Cash on Delivery</label>
                                </div>
                            </div>
                            <div class="text-input">
                                <label for="e-money-num">e-Money Number</label>
                                <input type="text" id="e-money-num" name="e-money-num" />
                            </div>
                            <div class="text-input">
                                <label for="e-money-pin">e-Money PIN</label>
                                <input type="text" id="e-money-pin" name="e-money-pin" />
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
                        <button>Continue & Pay</button>
                    </div>
                </section>

            </section>
        </>
    );
}
export default CheckOut;