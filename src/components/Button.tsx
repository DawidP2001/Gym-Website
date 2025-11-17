interface ButtonProps{
    className?: string;
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
    return (
        <button
            className={`btn px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className || ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;