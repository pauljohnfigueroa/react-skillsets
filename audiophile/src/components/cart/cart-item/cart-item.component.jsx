const CartItem = () => {
    return (<>
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
    </>);
}

export default CartItem;