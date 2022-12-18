const ProductInTheBox = ({ quantity, description }) => {
    return (
        <>
            <p className="quantity">{quantity}x</p>
            <p className="description">{description}</p>
        </>
    );
}
export default ProductInTheBox;