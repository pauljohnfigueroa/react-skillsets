import { useContext } from "react";
//import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../../contexts/categories.context";

const ProductCategoryListing = ({ products }) => {

    //const { categoriesMap } = useContext(CategoriesContext);

    //const navigate = useNavigate();

    // const onClickHandlerSeeProduct = (e, productPageSlug) => {
    //     e.preventDefault();

    //     //navigate('/');
    //     console.log(productPageSlug);
    // }

    //console.log('CATEGORIES MAP', categoriesMap);

    return (
        <>
            <section className="product-section">
                {products.map(product => {

                    let reversed = 'product-card-reversed';
                    let isNewProduct = <p className="sub-heading">NEW PRODUCT</p>; // remember, we are working in JSX here and not HTML

                    if (product.id % 2) {
                        reversed = '';
                    }

                    if (!product.isNewProduct) {
                        isNewProduct = '';
                    }

                    return (<div key={product.id} className={`product-card ${reversed}`}>
                        <div className="product-card-header">
                            <img srcSet={`${product.imgUrlMobile} ${product.imgUrlMobileWidth},
                            ${product.imgUrlDesktop} ${product.imgUrlDesktopWidth}`}
                                src={product.imgUrlDesktop} alt={product.name} />
                        </div>
                        <div className="product-card-description-container">
                            <div className="product-card-description">
                                {isNewProduct}
                                <h2 className="heading">{product.name}</h2>
                                <p className="sub-text">{product.description}</p>
                                <button type="button" className="button" >See Product</button>
                            </div>
                        </div>
                    </div>)
                })}
            </section>
        </>
    );

}

export default ProductCategoryListing;