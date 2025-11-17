interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
        <nav className="p-4 fixed w-full top-0 left-0 z-20 bg-lime-600 shadow-md">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 inline-block mr-2" />
            <span className="text-gray-200 text-lg font-semibold">{title}</span>
            <img src="icons/hamburger.png" alt="Menu" className="h-6 w-6 inline-block float-right" />
        </nav>
    );
};

export default Navbar;