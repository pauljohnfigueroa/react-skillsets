import heroImageMobile from '../../assets/images/home/mobile/image-hero.jpg';
import heroImageTablet from '../../assets/images/home/tablet/image-hero.jpg';
import heroImageDesktop from '../../assets/images/home/desktop/image-hero.jpg';

const Hero = () => {
    return (
        <section className="hero">

            <img srcSet={`${heroImageMobile} 563w,
                            ${heroImageTablet} 1152w,
                            ${heroImageDesktop} 1440w`
            } src={heroImageDesktop}
                alt="Headphone" />

            <div className="hero-message">
                <div className="hero-message-container">
                    <p className="hero-sub-heading">New Product</p>
                    <h1 className="hero-heading">XX99 Mark II Headphones</h1>
                    <p className="hero-subtext">Experience natural, life-like audio and exceptional build quality made for the
                        passionate music enthusiast.</p>
                    <div className="hero-button">
                        <a href="#">See Product</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;