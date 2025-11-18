import React from 'react';

interface NavbarProps {
    className?: string;
    setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ className, setPage }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const menuItems = [
        { label: 'Home', page: 'home' },
        { label: 'Pricing', page: 'pricing' },
    ];

    return (
        <>
            <nav className={`p-2 pb-4 fixed w-full top-0 left-0 z-20 bg-black shadow-lg ${className || ''}`}>
                <span className="text-gray-200 text-3xl font-semibold">
                    <span className="text-lime-400 font-semibold">Midlands</span> Gyms
                </span>
                <button 
                    onClick={toggleMenu}
                    className="float-right mt-1 p-1 hover:bg-gray-800 rounded transition-colors"
                    aria-label="Toggle menu"
                >
                    <img src="icons/hamburger.png" alt="Menu" className="h-8 w-8 invert" />
                </button>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 transition-opacity"
                    onClick={closeMenu}
                />
            )}

            {/* Side Drawer */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <span className="text-white text-xl font-semibold">Menu</span>
                    <button 
                        onClick={closeMenu}
                        className="text-white text-3xl hover:text-lime-400 transition-colors"
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>
                <nav className="flex flex-col p-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.page}
                            onClick={() => {
                                setPage(item.page);
                                closeMenu();
                            }}
                            className="text-white py-3 px-4 hover:bg-gray-800 hover:text-lime-400 rounded transition-colors text-left"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Navbar;