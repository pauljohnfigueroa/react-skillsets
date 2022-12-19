import desktopImageHeadphones from '../assets/images/shared/desktop/image-category-thumbnail-headphones.png';
import desktopImageSpeakers from '../assets/images/shared/desktop/image-category-thumbnail-speakers.png';
import desktopImageEarphones from '../assets/images/shared/desktop/image-category-thumbnail-earphones.png';

const prodCategories = [
    {
        id: 1,
        imgUrl: desktopImageHeadphones,
        heading: 'Headphones',
        altText: 'Headphone',
        url: '/shop/headphones',
    },
    {
        id: 2,
        imgUrl: desktopImageSpeakers,
        heading: 'Speakers',
        altText: 'Audio Speaker',
        url: '/shop/speakers',
    },
    {
        id: 3,
        imgUrl: desktopImageEarphones,
        heading: 'Earphones',
        altText: 'Audio Earphone',
        url: '/shop/earphones',
    },
];

export default prodCategories;