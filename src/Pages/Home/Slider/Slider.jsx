import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'
import { Link } from 'react-router-dom';


const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='custom-bg-banner'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container">
                        <div className="hero-content flex-col lg:flex-row-reverse h-[650px]">
                            <div className='w-md-1/2 w-full'>
                                {/* <img src="https://i.ibb.co/b7BnhF0/image.webp" className="w-full" /> */}
                            </div>

                            <div className='w-md-1/2 w-full text-left text-white'>
                                <h1 className="text-4xl font-bold"> Explore Our Diverse Courses</h1>
                                <p className="py-6">At CampSportopia, we believe in providing a diverse selection of courses to cater to every child is interests. From All-Star Athletics to Soccer Superstars, our expert instructors are dedicated to nurturing each child is passion for sports while focusing on skill enhancement and enjoyment.</p>
                                <Link to="/classes"><button className="primary-custom-bg text-white px-6 py-3 rounded font-bold text-lg">Check Our Classes</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="hero-content flex-col lg:flex-row-reverse h-[650px]">
                            <div className='w-md-1/2 w-full'>
                                {/* <img src="https://i.ibb.co/b7BnhF0/image.webp" className="w-full" /> */}
                            </div>

                            <div className='w-md-1/2 w-full text-left text-white'>
                                <h1 className="text-4xl font-bold">Experienced Instructors</h1>
                                <p className="py-6">Our team of experienced instructors is passionate about teaching and inspiring young athletes. With their expertise and guidance, your child will receive top-notch coaching and personalized attention throughout their learning journey. We prioritize safety and create a positive and encouraging environment for all campers.</p>
                                <Link to="/instructors"><button className="primary-custom-bg text-white px-6 py-3 rounded font-bold text-lg">Check Our Instructors</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="hero-content flex-col lg:flex-row-reverse h-[650px]">
                            <div className='w-md-1/2 w-full'>
                                {/* <img src="https://i.ibb.co/b7BnhF0/image.webp" className="w-full" /> */}
                            </div>

                            <div className='w-md-1/2 w-full text-left text-white'>
                                <h1 className="text-4xl font-bold">Engaging Outdoor Adventures</h1>
                                <p className="py-6">CampSportopia is not just about sports; it is about embracing the great outdoors. From Swim & Splash Adventures to Outdoor Adventure Quest, our campers will have the opportunity to explore nature, develop outdoor skills, and foster a love for adventure in a supervised and supportive setting.</p>
                                <Link to="/classes"><button className="primary-custom-bg text-white px-6 py-3 rounded font-bold text-lg">Check Our Classes</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper >
        </div>
    );
};

export default Slider;