interface FeaturesCardProps {
    className?: string;
    title: string;
    description: string;
    imgSrc?: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ className, title, description, imgSrc }) => {
    return (
        <div 
            className={`features-card rounded-lg shadow-md hover:shadow-lg transition h-50 flex flex-col justify-end relative ${className || ''}`}
            style={{backgroundImage: imgSrc ? `url(${imgSrc})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="relative bg-gradient-to-b from-transparent to-black/90 p-4 w-full">
                <h2 className="text-xl font-semibold mb-2 text-gray-200">{title}</h2>
                <p className="text-gray-400">{description}</p>
                <img src="icons/right.png" alt="Right Chevron" className="w-12 h-12 absolute bottom-6 right-0 "/>
            </div>
        </div>
    );
}

export default FeaturesCard;