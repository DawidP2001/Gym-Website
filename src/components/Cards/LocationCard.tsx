interface LocationCardProps{
    className?: string;
    locationName: string;
    address: string;
    imgSrc?: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ className, locationName, address, imgSrc }) => {
    return (
        <div
            className={`location-card rounded-lg shadow-md hover:shadow-lg transition h-50 flex flex-col justify-end relative ${className || ''}`}
            style={{backgroundImage: imgSrc ? `url(${imgSrc})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >  
            <div className="relative bg-gradient-to-b from-transparent to-black/90 p-4 w-full">
                <h2 className="text-xl font-semibold mb-2 text-gray-200">{locationName}</h2>
                <p className="text-gray-400">{address}</p>
                <img src="icons/location.png" alt="Location Icon" className="w-12 h-12 absolute bottom-6 right-0 "/>
            </div>
        </div>
    );
}

export default LocationCard;