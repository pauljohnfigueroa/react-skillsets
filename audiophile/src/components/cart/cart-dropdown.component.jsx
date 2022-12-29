
const CartDropDown = () => {
    return (
        <>
            <section class="cart-modal">
                <aside class="cart">
                    <div class="heading-container">
                        <h2 class="heading">Cart<span>(3)</span></h2>
                        <a href="#">Remove all</a>
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

                            <form action="#">
                                <div class="quantity-nav">
                                    <div class="quantity-button quantity-down">-</div>
                                </div>
                                <input type="number" min="0" value="0" class="quantity" />
                                <div class="quantity-nav">
                                    <div class="quantity-button quantity-up">+</div>
                                </div>
                            </form>

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

                            <form action="#">
                                <div class="quantity-nav">
                                    <div class="quantity-button quantity-down">-</div>
                                </div>
                                <input type="number" min="0" value="0" class="quantity" />
                                <div class="quantity-nav">
                                    <div class="quantity-button quantity-up">+</div>
                                </div>
                            </form>

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

                            <form action="#">
                                <div class="quantity-nav">
                                    <div class="quantity-button quantity-down">-</div>
                                </div>
                                <input type="number" min="0" value="0" class="quantity" />
                                <div class="quantity-nav">
                                    <div class="quantity-button quantity-up">+</div>
                                </div>
                            </form>

                        </div>
                    </div>

                    <div class="button-container">
                        <button>Checkout</button>
                    </div>
                </aside>
            </section>
        </>
    );
}
export default CartDropDown;