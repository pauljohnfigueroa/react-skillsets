import ProductFeatures from "./product-features/product-features.component";
import ProductInTheBox from "./product-in-the-box/product-in-the-box.component";

import ProductCategories from "../product-categories/product-categories.component";
import Marketing from "../marketing/marketing.component";
import Footer from "../footer/footer.component";

const ProductDetailPage = ({ product }) => {

    let isNewProduct = <p className="sub-heading">NEW PRODUCT</p>;
    if (!product.isNewProduct) {
        isNewProduct = '';
    }

    const onChangeHandler = () => {
        console.log('value changed');
    }


    return (
        <>
            <section className="go-back-link">
                <a href="#">Go Back</a>
            </section>

            <section className="product-section">
                <div className="product-card">

                    <div className="product-card-header">
                        <img
                            srcSet={`   
                                ${product.imgUrlMobile} ${product.imgUrlMobileWidth},
                                ${product.imgUrlDesktop} ${product.imgUrlDesktopWidth}
                            `}
                            src={product.imgUrlDesktop} alt={product.name}
                        />
                    </div>

                    <div className="product-card-description-container">

                        <div className="product-card-description">
                            {isNewProduct}
                            <h2 className="heading">{product.name}</h2>
                            <p className="sub-text">{product.description}</p>
                        </div>

                        <div className="product-form">
                            <p className="price">$ {product.price}</p>
                            <form action="#">
                                <div className="quantity-nav">
                                    <div className="quantity-button quantity-down">-</div>
                                </div>
                                <input type="number" min="0" value="0" onChange={onChangeHandler} className="quantity" />
                                <div className="quantity-nav">
                                    <div className="quantity-button quantity-up">+</div>
                                </div>

                                <button type="button" className="form-button">Add to Cart</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <section className="product-features-container">
                <div className="product-features">
                    <h2>Features</h2>
                    <ProductFeatures features={product.features} />
                </div>

                <div className="in-the-box">
                    <h2>In the box</h2>
                    <ul>
                        {product.inTheBox.map(item => (
                            <>
                                <li>
                                    <ProductInTheBox
                                        quantity={item.quantity}
                                        description={item.description}
                                    />
                                </li>
                            </>
                        )
                        )}
                    </ul>
                </div>
            </section >

            <section className="gallery">
                <div className="vertical-group">
                    <div className="gallery-card-vert">
                        <img srcSet={`${product.galleryPhotos.photo1Mobile} ${product.galleryPhotos.photo1MobileWidth},
                        ${product.galleryPhotos.photo1Tablet} ${product.galleryPhotos.photo1TabletWidth},
                        ${product.galleryPhotos.photo1Desktop} ${product.galleryPhotos.photo1DesktopWidth}`}
                            src={product.galleryPhotos.photo1Desktop} alt={product.name} />
                    </div>
                    <div className="gallery-card-vert">
                        <img srcSet={`${product.galleryPhotos.photo2Mobile} ${product.galleryPhotos.photo2MobileWidth},
                        ${product.galleryPhotos.photo2Tablet} ${product.galleryPhotos.photo2TabletWidth},
                        ${product.galleryPhotos.photo2Desktop} ${product.galleryPhotos.photo2DesktopWidth}`}
                            src={product.galleryPhotos.photo2Desktop} alt={product.name} />
                    </div>
                </div>
                <div className="horizontal-group">
                    <div className="gallery-card-hor">
                        <img srcSet={`${product.galleryPhotos.photo3Mobile} ${product.galleryPhotos.photo3MobileWidth},
                        ${product.galleryPhotos.photo3Tablet} ${product.galleryPhotos.photo3TabletWidth},
                        ${product.galleryPhotos.photo3Desktop} ${product.galleryPhotos.photo3DesktopWidth}`}
                            src={product.galleryPhotos.photo3Desktop} alt={product.name} />
                    </div>
                </div>
            </section>

            <section className="product-suggestions">
                <h2 className="heading">You may also like</h2>

                <div className="product-suggestions-cards">
                    <div className="suggestion-card">
                        <div className="suggestion-card-header">
                            <div className="image-container">
                                <img srcSet={`${product.relatedProducts[0].photoMobile} ${product.relatedProducts[0].photoMobileWidth}`}
                                    src={product.relatedProducts[0].photoMobile} alt={product.name} />
                            </div>
                        </div>
                        <h2 className="title">{product.relatedProducts[0].name}</h2>
                        <div className="suggestion-link">
                            <a href="#">See Product</a>
                        </div>
                    </div>
                    <div className="suggestion-card">
                        <div className="suggestion-card-header">
                            <div className="image-container">
                                <img srcSet={`${product.relatedProducts[1].photoMobile} ${product.relatedProducts[1].photoMobileWidth}`}
                                    src={product.relatedProducts[1].photoMobile} alt={product.name} />
                            </div>
                        </div>
                        <h2 className="title">{product.relatedProducts[1].name}</h2>
                        <div className="suggestion-link">
                            <a href="#">See Product</a>
                        </div>
                    </div>
                    <div className="suggestion-card">
                        <div className="suggestion-card-header">
                            <div className="image-container">
                                <img srcSet={`${product.relatedProducts[2].photoMobile} ${product.relatedProducts[2].photoMobileWidth}`}
                                    src={product.relatedProducts[2].photoMobile} alt={product.name} />
                            </div>
                        </div>
                        <h2 className="title">{product.relatedProducts[2].name}</h2>
                        <div className="suggestion-link">
                            <a href="#">See Product</a>
                        </div>
                    </div>
                </div>
            </section>

            <ProductCategories />
            <Marketing />
            <Footer />
        </>
    );
}
export default ProductDetailPage;