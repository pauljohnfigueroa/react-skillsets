const CartItem = ({ cartItems }) => {

    console.log(`cartItems =>`, cartItems);


    if (cartItems.length) {
        return (
            cartItems.map((cartItem) => {
                return (
                    <>
                        <div key={cartItem.id} class="item-row">
                            <div class="item-image-container">
                                <img src="./dist/assets/images/product-xx59-headphones/mobile/image-removebg-preview.png" alt="" />
                            </div>

                            <div class="item-details">
                                <div class="item-title-price">
                                    <p class="item-title">{cartItem.name}</p>
                                    <p class="item-price">${cartItem.price}</p>
                                </div>

                                <form action="#">
                                    <div class="quantity-nav">
                                        <div class="quantity-button quantity-down">-</div>
                                    </div>
                                    <input type="number" min="0" value={cartItem.quantity} class="quantity" />
                                    <div class="quantity-nav">
                                        <div class="quantity-button quantity-up">+</div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </>
                );

            })
        );
    }
    else {
        return <h2>Your cart is empty.</h2>
    }
}

export default CartItem;