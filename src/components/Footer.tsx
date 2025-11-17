interface FooterProps {
    year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => {
    return (
        <footer className="bg-gray-800 p-4 mt-8 text-center text-white w-full hyphens-auto">
            &copy; {year} Gym Website. All rights reserved.
            <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by feen - Flaticon</a>
            <p>Video by Pressmaster: https://www.pexels.com/video/a-man-assisting-a-woman-in-using-the-flat-pulldown-weights-equipment-in-a-gym-3209241/</p>
            <p>Video by Pressmaster: https://www.pexels.com/video/a-man-lifting-weights-in-a-fitness-gym-3196220/</p>
            <a href="https://www.flaticon.com/free-icons/right-chevron" title="right chevron icons">Right chevron icons created by th studio - Flaticon</a>
            <a href="https://unsplash.com/photos/gym-road-signage-9GdMuamOGlc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="">gym-locations.jpg</a>
            <a href="https://unsplash.com/photos/group-of-women-doing-yoga-gJtDg6WfMlQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="">fitness-class.jpg</a>
            <a href="https://unsplash.com/photos/woman-kneeling-beside-man-R0y_bEUjiOM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="">personal-training.jpg</a>
            <a href="https://unsplash.com/photos/person-swimming-on-an-olympic-pool-ZbbhkQ0M2AM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="">swimming.jpg</a>
            <a href="https://unsplash.com/photos/a-wooden-staircase-in-a-room-Aue1vt5naxA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" className="">health-area.jpg</a>
            <a href="https://www.freepik.com/free-photo/group-happy-people-sitting-floor-after-workout_3614698.htm">membership.jpg</a>
            <p>book-tour.jpg Photo by <a href="https://unsplash.com/@dncerullo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danielle Cerullo</a> on <a href="https://unsplash.com/photos/woman-standing-surrounded-by-exercise-equipment-CQfNt66ttZM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </footer>
    );
};
export default Footer;