import BookTourSection from "../sections/BookTourSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import LocationsSection from "../sections/LocationsSection";
import PricingSection from "../sections/PricingSection";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <BookTourSection />
            <LocationsSection />
            <PricingSection />
        </>
    );
}

export default HomePage;