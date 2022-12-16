import imgUrlMobileXx99M2 from '../assets/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview-2.png';
import imgUrlDesktopXx99M2 from '../assets/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';

import imgUrlMobileXx99M1 from '../assets/images/product-xx99-mark-one-headphones/mobile/image-category-page-preview-2.png';
import imgUrlDesktopXx99M1 from '../assets/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';

import imgUrlMobileXx59 from '../assets/images/product-xx59-headphones/mobile/image-category-page-preview-2.png';
import imgUrlDesktopXx59 from '../assets/images/product-xx59-headphones/desktop/image-category-page-preview.jpg';

import imgUrlMobileZx9 from '../assets/images/product-zx9-speaker/mobile/image-product.jpg';
import imgUrlDesktopZx9 from '../assets/images/product-zx9-speaker/desktop/image-product.jpg';

import imgUrlMobileZx7 from '../assets/images/product-zx7-speaker/mobile/image-product.jpg';
import imgUrlDesktopZx7 from '../assets/images/product-zx7-speaker/desktop/image-product.jpg';

import imgUrlMobileYx1 from '../assets/images/product-yx1-earphones/mobile/image-product.jpg';
import imgUrlDesktopYx1 from '../assets/images/product-yx1-earphones/desktop/image-product.jpg';


const products = {
    headphones: [
        {
            id: 1,
            isNewProduct: true,
            name: 'XX99 Mark II Headphones',
            description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
            price: 1214,
            imgUrlMobile: imgUrlMobileXx99M2,
            imgUrlMobileWidth: '491w',
            imgUrlTablet: '',
            imgUrlTabletWidth: '',
            imgUrlDesktop: imgUrlDesktopXx99M2,
            imgUrlDesktopWidth: '1080w',
            productPageSlug: 'xx99-mark-ii-headphones',
        },
        {
            id: 2,
            isNewProduct: false,
            name: 'XX99 Mark I Headphones',
            description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
            price: 1021,
            imgUrlMobile: imgUrlMobileXx99M1,
            imgUrlMobileWidth: '520w',
            imgUrlTablet: '',
            imgUrlTabletWidth: '',
            imgUrlDesktop: imgUrlDesktopXx99M1,
            imgUrlDesktopWidth: '1080w',
            productPageSlug: 'xx99-mark-i-headphones',
        },
        {
            id: 3,
            isNewProduct: false,
            name: 'XX59 Headphones',
            description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
            price: 1987,
            imgUrlMobile: imgUrlMobileXx59,
            imgUrlMobileWidth: '649w',
            imgUrlTablet: '',
            imgUrlTabletWidth: '',
            imgUrlDesktop: imgUrlDesktopXx59,
            imgUrlDesktopWidth: '1080w',
            productPageSlug: 'XX59-headphones',
        }
    ],

    speakers: [
        {
            id: 1,
            isNewProduct: true,
            name: 'ZX9 Speaker',
            description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
            price: 1987,
            imgUrlMobile: imgUrlMobileZx9,
            imgUrlMobileWidth: '584w',
            imgUrlTablet: '',
            imgUrlTabletWidth: '',
            imgUrlDesktop: imgUrlDesktopZx9,
            imgUrlDesktopWidth: '875w',
            productPageSlug: 'zx9-speaker',
        },
        {
            id: 2,
            isNewProduct: false,
            name: 'ZX7 Speaker',
            description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
            price: 1789,
            imgUrlMobile: imgUrlMobileZx7,
            imgUrlMobileWidth: '537w',
            imgUrlTablet: '',
            imgUrlTabletWidth: '',
            imgUrlDesktop: imgUrlDesktopZx7,
            imgUrlDesktopWidth: '1074w',
            productPageSlug: 'zx7-speaker',
        }
    ],
    earphones: [
        {
            id: 1,
            isNewProduct: true,
            name: 'YX1 Wireless Earphones',
            price: 345,
            description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
            imgUrlMobile: imgUrlMobileYx1,
            imgUrlMobileWidth: '649w',
            imgUrlTablet: '',
            imgUrlTabletWidth: '',
            imgUrlDesktop: imgUrlDesktopYx1,
            imgUrlDesktopWidth: '1080w',
            productPageSlug: 'yx1-wireless-earphones',
        }
    ]
};

export default products;