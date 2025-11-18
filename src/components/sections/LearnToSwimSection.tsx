import Button from "../Button";

interface LearnToSwimSectionProps {
    className?: string;
}

export const LearnToSwimSection: React.FC<LearnToSwimSectionProps> = ({ className }) => {
    return (
        <section 
            className={` ${className}`}
            style={{backgroundImage: "url(/images/Learn-Swim.jpg)", backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="h-100 bg-indigo-500/30 backdrop-blur-xs w-full flex flex-col items-center justify-center text-center gap-4 p-8">
                <h2 className="text-4xl text-gray-200 font-semibold mb-6 text-shadow-lg">Learn to Swim</h2>
                <p className="mb-6 text-gray-200 text-shadow-lg">Whether you're a beginner or looking to refine your technique, our expert instructors provide personalized lessons for all ages and skill levels in our state of the art swimming facilities.</p>
                <Button text="Book Your Lesson" onClick={() => window.location.href = '#contact'} />
            </div>
        </section>
    );
}

export default LearnToSwimSection;