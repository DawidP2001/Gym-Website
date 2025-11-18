import BookTourSection from "../sections/BookTourSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import LearnToSwimSection from "../sections/LearnToSwimSection";
import LocationsSection from "../sections/LocationsSection";
import TakeClassSection from "../sections/TakeClassSection";
import ConnectSection from "../sections/ConnectSection";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <BookTourSection />
            <LearnToSwimSection />
            <TakeClassSection />
            <LocationsSection />
            <ConnectSection />
        </>
    );
}

export default HomePage;