import LocationCard from "../Cards/LocationCard";

interface LocationsSectionProps {
    className?: string; 
}
const LocationsSection: React.FC<LocationsSectionProps> = ({ className }) => {
    return (
        <section id="locations" className={`locations-section w-full pt-10 pb-20 ${className || ''}`}>
            <h1 className="text-center text-gray-200 text-4xl mb-4 font-semibold">Find Your Nearest Gym</h1>
            <p className="text-center text-gray-200 mb-8 text-gray-300">Become part of the <span className="text-lime-400">Midland </span> Gyms Community!!</p>
            <div className="grid grid-cols-2 gap-4 mx-2">
                <LocationCard locationName="Downtown Gym" address="123 Main St, Cityville" imgSrc="images/locations/location1.jpg" />
                <LocationCard locationName="Downtown Gym" address="123 Main St, Cityville" imgSrc="images/locations/location1.jpg" />
                <LocationCard locationName="Downtown Gym" address="123 Main St, Cityville" imgSrc="images/locations/location1.jpg" />
                <LocationCard locationName="Downtown Gym" address="123 Main St, Cityville" imgSrc="images/locations/location1.jpg" />
                <LocationCard locationName="Downtown Gym" address="123 Main St, Cityville" imgSrc="images/locations/location1.jpg" />
                <LocationCard locationName="Downtown Gym" address="123 Main St, Cityville" imgSrc="images/locations/location1.jpg" />
            </div>
        </section>
    );
}

export default LocationsSection;