import PricingCard from "../Cards/PricingCard";

interface PricingPageProps {
    className?: string;
}

export const PricingPage: React.FC<PricingPageProps> = ({ className }) => {
    return (
        <section className={`min-h-screen py-16 px-4 ${className || ''}`}>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-white text-center mb-4">Choose Your Plan</h1>
                <p className="text-gray-400 text-center mb-12 text-lg">Select the membership that fits your fitness goals</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PricingCard 
                        title="Basic"
                        price="£29"
                        features={[
                            "Access to gym facilities",
                            "Cardio & weight equipment",
                            "Locker room access",
                            "Free fitness assessment",
                            "Mobile app access"
                        ]}
                        buttonText="Get Started"
                    />
                    
                    <PricingCard 
                        title="Premium"
                        price="£49"
                        features={[
                            "Everything in Basic",
                            "Unlimited group classes",
                            "Access to swimming pool",
                            "Sauna & steam room",
                            "1 personal training session/month",
                            "Nutrition consultation"
                        ]}
                        buttonText="Most Popular"
                    />
                    
                    <PricingCard 
                        title="Elite"
                        price="£79"
                        features={[
                            "Everything in Premium",
                            "4 personal training sessions/month",
                            "Priority class booking",
                            "Guest passes (2/month)",
                            "Customized meal plans",
                            "Recovery & massage therapy",
                            "24/7 gym access"
                        ]}
                        buttonText="Go Elite"
                    />
                </div>
            </div>
        </section>
    );
}

export default PricingPage;