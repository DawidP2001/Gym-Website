interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
        <nav className="bg-gray-800 p-4">
            <h1 className="text-white text-2xl font-bold">{title}</h1>
        </nav>
    );
};

export default Navbar;