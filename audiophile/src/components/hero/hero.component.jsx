import heroImageMobile from '../../assets/images/home/mobile/image-hero.jpg';
import heroImageTablet from '../../assets/images/home/tablet/image-hero.jpg';
import heroImageDesktop from '../../assets/images/home/desktop/image-hero.jpg';

const Hero = () => {
    return (
        <section class="hero">

            <img srcset={`${heroImageMobile} 563w,
                            ${heroImageTablet} 1152w,
                            ${heroImageDesktop} 1440w`
            } src={heroImageDesktop}
                alt="Headphone" />

            <div class="hero-message">
                <div class="hero-message-container">
                    <p class="hero-sub-heading">New Product</p>
                    <h1 class="hero-heading">XX99 Mark II Headphones</h1>
                    <p class="hero-subtext">Experience natural, life-like audio and exceptional build quality made for the
                        passionate music enthusiast.</p>
                    <div class="hero-button">
                        <a href="#">See Product</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;