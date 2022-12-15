import desktopImageHeadphones from '../../assets/images/shared/desktop/image-category-thumbnail-headphones.png';
import desktopImageSpeakers from '../../assets/images/shared/desktop/image-category-thumbnail-speakers.png';
import desktopImageEarphones from '../../assets/images/shared/desktop/image-category-thumbnail-earphones.png';

const prodCategories = [
    {
        id: 1,
        imgUrl: desktopImageHeadphones,
        heading: 'Headphones',
        altText: 'Headphone'
    },
    {
        id: 2,
        imgUrl: desktopImageSpeakers,
        heading: 'Speakers',
        altText: 'Audio Speaker'
    },
    {
        id: 3,
        imgUrl: desktopImageEarphones,
        heading: 'Earphones',
        altText: 'Audio Earphone'
    },
];
const ProductCategories = () => {
    return (
        <>
            <section class="categories-section">
                <div class="categories-card-container">
                    {prodCategories.map(prodCategory => (
                        <div class="category-card">
                            <div class="image-container ">
                                <img src={prodCategory.imgUrl} alt={prodCategory.altText} />
                            </div>
                            <h2 class="category-heading">{prodCategory.heading}</h2>
                            <div class="category-link"><a href="#">Shop <span> &gt; </span></a></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductCategories;