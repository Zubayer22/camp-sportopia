import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'


const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
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
                    <div className="container mx-auto">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-md-1/2 w-full' data-aos="fade-left" data-aos-duration="1000">
                                <img src="https://i.ibb.co/b7BnhF0/image.webp" className="w-full" />
                            </div>

                            <div className='w-md-1/2 w-full' data-aos="fade-right" data-aos-duration="1000">
                                <h1 className="text-4xl font-bold">Discover Your Inner Hero at Hero Haven</h1>
                                <p className="py-6">At Hero Haven, we bring together the thrilling world of action figures and collectibles to delight fans and collectors alike. Step into our virtual haven and immerse yourself in a universe filled with your favorite superheroes and iconic characters.</p>
                                <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-md-1/2 w-full' data-aos="fade-left" data-aos-duration="1000">
                                <img src="https://i.ibb.co/b7BnhF0/image.webp" className="w-full" />
                            </div>

                            <div className='w-md-1/2 w-full' data-aos="fade-right" data-aos-duration="1000">
                                <h1 className="text-4xl font-bold">Discover Your Inner Hero at Hero Haven</h1>
                                <p className="py-6">At Hero Haven, we bring together the thrilling world of action figures and collectibles to delight fans and collectors alike. Step into our virtual haven and immerse yourself in a universe filled with your favorite superheroes and iconic characters.</p>
                                <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-md-1/2 w-full' data-aos="fade-left" data-aos-duration="1000">
                                <img src="https://i.ibb.co/b7BnhF0/image.webp" className="w-full" />
                            </div>

                            <div className='w-md-1/2 w-full' data-aos="fade-right" data-aos-duration="1000">
                                <h1 className="text-4xl font-bold">Discover Your Inner Hero at Hero Haven</h1>
                                <p className="py-6">At Hero Haven, we bring together the thrilling world of action figures and collectibles to delight fans and collectors alike. Step into our virtual haven and immerse yourself in a universe filled with your favorite superheroes and iconic characters.</p>
                                <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded font-bold text-lg">Get Started</button>
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
        </>
    );
};

export default Slider;