
const CartItem = ({ cartItems }) => {

    if (cartItems.length) {
        return (
            cartItems.map((cartItem) => {
                return (
                    <>
                        <div key={cartItem.id} class="item-row">
                            <div class="item-image-container">
                                <img src="./dist/assets/images/product-xx59-headphones/mobile/image-removebg-preview.png" alt="" />
                            </div>

                            <div className="item-details">
                                <div className="item-title-price">
                                    <p className="item-title">{cartItem.name}</p>
                                    <p className="item-price">${cartItem.price}</p>
                                </div>

                                <form action="#">
                                    <div className="quantity-nav">
                                        <div className="quantity-button quantity-down">-</div>
                                    </div>
                                    <input type="number" min="0" value={cartItem.quantity} className="quantity" />
                                    <div className="quantity-nav">
                                        <div className="quantity-button quantity-up">+</div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </>
                );

            })
        );
    } else {
        return <h2>Your cart is empty.</h2>
    }
}


export default CartItem;