interface LocationsSectionProps {
    className?: string; 
}
const LocationsSection: React.FC<LocationsSectionProps> = ({ className }) => {
    return (
        <section id="locations" className={`locations-section w-full py-20 ${className || ''}`}>
            <h1>Locations</h1>
        </section>
    );
}

export default LocationsSection;