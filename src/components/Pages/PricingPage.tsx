interface PricingPageProps {
    className?: string;
}

export const PricingPage: React.FC<PricingPageProps> = ({ className }) => {
    return (
        <section className={`pricing-page ${className || ''}`}>
            <h1 className="bg-blue-600 h-100">Pricing Page</h1>
        </section>
    );
}

export default PricingPage;