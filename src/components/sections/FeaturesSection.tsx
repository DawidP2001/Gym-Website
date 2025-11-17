import FeaturesCard from "../Cards/FeaturesCard";

interface FeaaturesSectionProps {
    className?: string;
}
const FeaturesSection: React.FC<FeaaturesSectionProps> = ({ className }) => {
    return (
        <section id="features" className={`features-section w-full py-20 ${className || ''}`}>
            <FeaturesCard title="Six Ireland's Best Gyms" description="Description of feature 1" className="m-4" imgSrc="/images/features/gym-location.jpg"/>
            <FeaturesCard title="Fitness Classes" description="Description of feature 2" className="m-4" imgSrc="/images/features/fitness-class.jpg" />
            <FeaturesCard title="Personal Training" description="Description of feature 3" className="m-4" imgSrc="/images/features/personal-training.jpg"/>
            <FeaturesCard title="Swimming" description="Description of feature 4" className="m-4" imgSrc="/images/features/swimming.jpg"/>
            <FeaturesCard title="Health Area" description="Description of feature 5" className="m-4" imgSrc="/images/features/health-area.jpg"/>
            <FeaturesCard title="Membership" description="Description of feature 6" className="m-4" imgSrc="/images/features/membership.jpg"/>
        </section>
    );
}

export default FeaturesSection;