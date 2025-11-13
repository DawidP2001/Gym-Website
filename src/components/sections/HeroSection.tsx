interface HeroSectionProps {
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
    return (
        <section className={`hero-section h-screen w-full flex items-center justify-center relative ${className || ''}`}>
            <video
                className="background-video absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/videos/background2.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="container relative z-10 mx-auto px-4 py-20 text-center flex flex-col items-start justify-center h-full">
                <p className="text-6xl font-black text-lime-400 text-left">$40</p>
                <p className="text-5xl font-black mb-4 text-lime-400 text-left">Monthly</p>
                <a href="#membership " className="text-lg bg-lime-400 text-gray-800 font-semibold px-10 py-2 rounded-full shadow-md hover:bg-lime-600 transition">
                    Join Now
                </a>
            </div>
        </section>
    );
}

export default HeroSection;