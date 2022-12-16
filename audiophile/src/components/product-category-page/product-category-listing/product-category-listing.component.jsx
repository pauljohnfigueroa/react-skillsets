const ProductCategoryListing = ({ products }) => {
    console.log(products);
    return (
        <>
            <section class="product-section">
                {products.map(product => (
                    <div class="product-card">
                        <div class="product-card-header">
                            <img srcset="./dist/assets/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg 1080w,
        ./dist/assets/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview-2.png 491w"
                                src="./dist/assets/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" alt="" />
                        </div>
                        <div class="product-card-description-container">
                            <div class="product-card-description">
                                <p class="sub-heading">NEW PRODUCT</p>
                                <h2 class="heading">XX99 Mark II Headphones</h2>
                                <p class="sub-text">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your
                                    premium
                                    headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                                <button type="button" class="button">See Product</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );

}

export default ProductCategoryListing;