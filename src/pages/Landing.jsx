import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import TrustSignals from '../components/TrustSignals';
import Testimonials from '../components/Testimonials';
import WhatsAppFAB from '../components/WhatsAppFAB';

const Landing = () => {
    return (
        <div className="pt-20">
            <Hero />
            <TrustSignals />
            <ProductGrid />
            <Testimonials />
            <WhatsAppFAB />
        </div>
    );
};

export default Landing;
