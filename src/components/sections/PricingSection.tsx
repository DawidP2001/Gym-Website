import PricingCard from "../Cards/PricingCard";

interface PricingSectionProps {
    className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className }) => {
    return (
        <section id="pricing" className={`pricing-section w-full py-20 ${className || ''}`}>
            <h1>Pricing</h1>
        </section>
    );
}

export default PricingSection;