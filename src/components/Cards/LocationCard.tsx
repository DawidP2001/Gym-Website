interface LocationCardProps{
    className?: string;
    locationName: string;
    address: string;
    imgSrc?: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ className, locationName, address, imgSrc }) => {
    return (
        <div
            className={`location-cardtransition flex flex-col justify-end relative ${className || ''}`}
        >  
            <img src={imgSrc} alt="Location Icon" className="object-cover w-full h-full rounded-lg"/>
            <div className="p-4 w-full">
                <h2 className="text-xl font-semibold mb-2 text-gray-200">{locationName}</h2>
                <p className="text-gray-400">{address}</p>
                
            </div>
        </div>
    );
}

export default LocationCard;