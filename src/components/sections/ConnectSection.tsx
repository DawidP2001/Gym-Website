import Button from "../Button";

interface ConnectSectionProps {
    className?: string;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ className }) => {
    return (
        <section className={`connect-section text-center ${className || ''}`}>
            <h1 className="text-4xl font-semibold text-gray-200 mb-4">Connect with <span className="text-lime-400">Midlands</span> Gyms</h1>
            <p className="text-gray-200 mb-4">Follow us on instagram to stay up to date! and feel free to contact us with any questions</p>
            <Button text="Contact Us" onClick={() => window.location.href = '#contact'} className="mb-2 mr-2"/>
            <Button text="Instagram" onClick={() => window.location.href = 'https://www.instagram.com/gymplusireland/'} />
        </section>
    );
}

export default ConnectSection;