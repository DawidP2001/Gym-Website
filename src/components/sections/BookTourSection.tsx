import Button from "../Button";

interface BookTourSectionProps {
    className?: string;
}

const BookTourSection: React.FC<BookTourSectionProps> = ({ className }) => {
    return (
        <section 
            id="book-tour" 
            className={`book-tour-section w-full${className || ''}`}
            style={{backgroundImage: "url(/images/book-tour.jpg)", backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="bg-yellow-400/35 backdrop-blur-xs p-8 rounded-lg h-100">
                <h2 className="text-3xl font-semibold mb-6">Book a Tour</h2>
                <Button text="Schedule Now" onClick={() => window.location.href = '#contact'} />
            </div>
        </section>
    );
}

export default BookTourSection;