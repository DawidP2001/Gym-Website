interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={`p-2 pb-4 fixed w-full top-0 left-0 z-20 bg-black shadow-lg ${className || ''}`}>
            <span className="text-gray-200 text-3xl font-semibold"><span className="text-lime-400 font-semibold">Midlands</span> Gyms</span>
            <img src="icons/hamburger.png" alt="Menu" className="h-8 w-8 inline-block float-right invert mt-1" />
        </nav>
    );
};

export default Navbar;