interface FooterProps {
    year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => {
    return (
        <footer className="bg-gray-800 p-4 mt-8 text-center text-white w-full">
            &copy; {year} Gym Website. All rights reserved.
            <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by feen - Flaticon</a>
            <p>Video by Pressmaster: https://www.pexels.com/video/a-man-assisting-a-woman-in-using-the-flat-pulldown-weights-equipment-in-a-gym-3209241/</p>
        </footer>
    );
};
export default Footer;