/* Product category cards */

import desktopImageHeadphones from '../../assets/images/shared/desktop/image-category-thumbnail-headphones.png';
import desktopImageSpeakers from '../../assets/images/shared/desktop/image-category-thumbnail-speakers.png';
import desktopImageEarphones from '../../assets/images/shared/desktop/image-category-thumbnail-earphones.png';

const ProductCategories = () => {

    const prodCategories = [
        {
            id: 1,
            imgUrl: desktopImageHeadphones,
            heading: 'Headphones',
            altText: 'Headphone',
            url: '/headphones',
        },
        {
            id: 2,
            imgUrl: desktopImageSpeakers,
            heading: 'Speakers',
            altText: 'Audio Speaker',
            url: '/speakers',
        },
        {
            id: 3,
            imgUrl: desktopImageEarphones,
            heading: 'Earphones',
            altText: 'Audio Earphone',
            url: '/earphones',
        },
    ];

    return (
        <>
            <section className="categories-section">
                <div className="categories-card-container">
                    {prodCategories.map(prodCategory => (
                        <div key={prodCategory.id} className="category-card">
                            <div className="image-container ">
                                <img src={prodCategory.imgUrl} alt={prodCategory.altText} />
                            </div>
                            <h2 className="category-heading">{prodCategory.heading}</h2>
                            <div className="category-link"><a href={prodCategory.url}>Shop <span> &gt; </span></a></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductCategories;