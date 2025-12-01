import Button from "../Button";

interface pricingCardProps {
    title: string;
    price: string;
    features: string[];
    buttonText: string;
}
const PricingCard: React.FC<pricingCardProps> = ({ title, price, features, buttonText }) => {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl hover:border-lime-400 transition-all duration-300 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="text-4xl font-bold text-lime-400 mb-6">
                {price}
                <span className="text-lg text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                        <span className="text-lime-400 mr-2">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>
            <Button text={buttonText} className="w-full" />
        </div>
    );
}

export default PricingCard;