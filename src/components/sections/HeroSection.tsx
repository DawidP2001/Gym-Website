interface HeroSectionProps {
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
    return (
        <section className={`hero-section h-screen w-full flex items-center justify-center relative ${className || ''}`}>
            <video
                className="background-video absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/videos/background.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="container relative z-10 mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl font-bold mb-4 text-green-500">Welcome to Our Gym</h1>
                <p className="text-xl mb-8 text-green-500">Achieve your fitness goals with us!</p>
                <a href="#membership " className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition ">
                    Join Now
                </a>
            </div>
        </section>
    );
}

export default HeroSection;