interface pricingCardProps {
    title: string;
    price: string;
    features: string[];
    buttonText: string;
}
const PricingCard: React.FC<pricingCardProps> = ({ title, price, features, buttonText }) => {
    return (
        <div className="pricing-card border rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h1>Hello</h1>
        </div>
    );
}

export default PricingCard;