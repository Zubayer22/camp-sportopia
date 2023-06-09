import ParallaxSection from "../ParallaxSection/ParallaxSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <>
            <Slider />
            <PopularClasses />
            <ParallaxSection />
            <PopularInstructor />
            <Reviews />
        </>
    );
};

export default Home;