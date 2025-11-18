import LocationCard from "../Cards/LocationCard";

interface LocationsSectionProps {
    className?: string; 
}
const LocationsSection: React.FC<LocationsSectionProps> = ({ className }) => {
    return (
        <section id="locations" className={`locations-section w-full py-20 ${className || ''}`}>
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