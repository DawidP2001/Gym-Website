import LocationCard from "../Cards/LocationCard";

interface LocationsSectionProps {
    className?: string; 
}
const LocationsSection: React.FC<LocationsSectionProps> = ({ className }) => {
    return (
        <section id="locations" className={`locations-section w-full py-20 ${className || ''}`}>
            <LocationCard locationName="Downtown Gym" address="123 Main St, Cityville" imgSrc="images/downtown-gym.jpg" />
            <LocationCard locationName="Uptown Gym" address="456 Elm St, Cityville" imgSrc="images/uptown-gym.jpg" />
            <LocationCard locationName="Suburb Gym" address="789 Oak St, Townsville" imgSrc="images/suburb-gym.jpg" />
        </section>
    );
}

export default LocationsSection;