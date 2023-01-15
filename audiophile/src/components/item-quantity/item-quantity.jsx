const ItemQuantity = () => {
    return (
        <>
            <form action="#" className="cart-quantity">
                <div className="quantity-nav">
                    <div className="quantity-button quantity-down" onClick={removeITemFromCartHandler}>-</div>
                </div>
                <input type="number" min="0" value={cartItem.quantity} className="quantity" onChange={() => { }} />
                <div className="quantity-nav">
                    <div className="quantity-button quantity-up" onClick={addItemFromCartHandler}>+</div>
                </div>
            </form>
        </>
    );
}
export default ItemQuantity;