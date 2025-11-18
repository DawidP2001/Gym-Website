interface ButtonProps{
    className?: string;
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
    return (
        <button
            className={`text-lg bg-lime-400 text-gray-800 font-semibold px-10 py-2 rounded-full shadow-md hover:bg-lime-600 transition ${className || ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;