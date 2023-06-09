
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";



// import required modules
import { Grid, Pagination } from "swiper";
import Star from "./Star";

const Reviews = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-10">Our Customer Reviews</h1>
                <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 1,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // Define responsive settings for different screen sizes
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="text-center">
                            <Star></Star>
                            <p className="py-4">CampSportopia was an amazing experience for my child! They had the opportunity to learn and improve their skills in various sports while making new friends. The instructors were knowledgeable, friendly, and created a positive environment. My child can not wait to attend again next summer!</p>
                            <h4 className="font-bold text-sm pb-10">- John D.</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <Star></Star>
                            <p className="py-4">I highly recommend CampSportopia to all parents looking for a great summer camp. My son had a fantastic time participating in the Outdoor Adventure Quest. The activities were thrilling, and the instructors were supportive and safety-conscious. It was a perfect blend of fun and learning in the great outdoors!</p>
                            <h4 className="font-bold text-sm pb-10"> - Emily S.</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <Star></Star>
                            <p className="py-4">CampSportopia exceeded our expectations! The All-Star Athletics course was well-organized, and the coaches were exceptional. Our daughter not only improved her skills but also gained confidence and made lifelong friends. The facilities were top-notch, and the staff ensured a positive and inclusive atmosphere. We can not wait to come back next year!</p>
                            <h4 className="font-bold text-sm pb-10">- Sarah L.</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <Star></Star>
                            <p className="py-4">CampSportopia provided a perfect balance of sports and outdoor activities. My daughter thoroughly enjoyed the Soccer Superstars program and learned valuable skills from the dedicated instructors. The camp is emphasis on teamwork and sportsmanship was admirable. We highly recommend CampSportopia for a fun-filled and enriching summer camp experience.</p>
                            <h4 className="font-bold text-sm pb-10"> - Amanda G.</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <Star></Star>
                            <p className="py-4">Our family had a fantastic experience with CampSportopia! The Swim & Splash Adventures course was a hit with my kids. The instructors were patient and skilled, making swimming lessons enjoyable and safe. The camp had excellent facilities and a well-planned curriculum. We are grateful for the wonderful memories created at CampSportopia!</p>
                            <h4 className="font-bold text-sm pb-10"> - Amanda G.</h4>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    );
};

export default Reviews;