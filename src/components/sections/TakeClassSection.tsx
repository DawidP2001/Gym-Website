import Button from "../Button";

interface TakeClassSectionProps {
    className?: string;
}

export const TakeClassSection: React.FC<TakeClassSectionProps> = ({ className }) => {
    return (
        <section 
            className={` ${className}`}
            style={{backgroundImage: "url(/images/Book-Class.jpg)", backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="h-100 bg-orange-500/30 backdrop-blur-xs w-full flex flex-col items-center justify-center text-center gap-4 p-8">
                <h2 className="text-4xl text-gray-200 font-semibold mb-6 text-shadow-lg">Take A Class</h2>
                <p className="mb-6 text-gray-200 text-shadow-lg">Whether you're a beginner or looking to refine your technique, our expert instructors provide personalized lessons for all ages and skill levels in our state of the art swimming facilities.</p>
                <Button text="Book A Class" onClick={() => window.location.href = '#contact'} />
            </div>
        </section>
    );
}

export default TakeClassSection;