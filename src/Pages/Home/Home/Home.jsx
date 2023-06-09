import ParallaxSection from "../ParallaxSection/ParallaxSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <>
            <Slider />
            <PopularClasses />
            <ParallaxSection/>
            <PopularInstructor />
        </>
    );
};

export default Home;