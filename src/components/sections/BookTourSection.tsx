import Button from "../Button";

interface BookTourSectionProps {
    className?: string;
}

const BookTourSection: React.FC<BookTourSectionProps> = ({ className }) => {
    return (
        <section id="book-tour" className={`book-tour-section w-full py-20 bg-lime-400 ${className || ''}`}>
            <h2 className="text-3xl font-semibold mb-6">Book a Tour</h2>
            <Button text="Schedule Now" onClick={() => window.location.href = '#contact'} />
        </section>
    );
}

export default BookTourSection;