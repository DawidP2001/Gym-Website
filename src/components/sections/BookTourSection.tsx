import Button from "../Button";

interface BookTourSectionProps {
    className?: string;
}

const BookTourSection: React.FC<BookTourSectionProps> = ({ className }) => {
    return (
        <section 
            id="book-tour" 
            className={`book-tour-section w-full${className || ''}`}
            style={{backgroundImage: "url(/images/book-tour3.jpg)", backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="bg-yellow-400/35 backdrop-blur-xs p-8 rounded-lg h-100 w-full flex flex-col items-center justify-center text-center gap-4">
                <h2 className="text-3xl text-gray-200 font-semibold mb-6 text-shadow-lg">Book a Tour</h2>
                <p className="mb-6 text-gray-200 text-shadow-lg">Experience our facilities and meet our trainers by scheduling a personalized tour. Tour includes a guided walkthrough of our gym, swimming pool, health area and a complimentary fitness assessment.</p>
                <Button text="Schedule Now" onClick={() => window.location.href = '#contact'} />
            </div>
        </section>
    );
}

export default BookTourSection;