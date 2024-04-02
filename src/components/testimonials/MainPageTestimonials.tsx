import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import { Button, Container } from 'react-bootstrap'; 
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';

const MainPageTestimonials = () => {
    const dispatch = useDispatch();

    const showModalLogin = () => {
        dispatch(openModal("login"));
    };

    return (
        <Container> 
            <div className="main-page-testimonials">
                <h2 className="text-center text-black">Testimonials</h2>
                <h3 className="text-center text-primary">What Patients Say About Us</h3>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 5000 }} 
                    className="mySwiper"
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <TestimonialsCard
                            text="About the clinic: “House Care Center” made an incredible impression on me. The atmosphere of care and professionalism permeates every corner. The staff is attentive, and the doctors provide quality service."
                            author="Robert Jones"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsCard
                            text="Dr. Davis is a physician with an exceptional touch. She swiftly and accurately diagnosed my condition, laid out the treatment plan, and patiently addressed all my inquiries. I am thankful for her professionalism."
                            author="Lisa Wilson"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsCard
                            text="“House Care Center” is a genuine haven of care. Attention to detail makes every visit enjoyable. The atmosphere is welcoming, and the service is of a consistently high standard."
                            author="Betty Smith"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsCard
                            text="I'm so grateful for the excellent care I received at House Care Center. The staff went above and beyond to make me feel comfortable, and the doctors were incredibly knowledgeable and attentive."
                            author="John Doe"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsCard
                            text="House Care Center exceeded all my expectations. The facilities were clean and modern, and the doctors were compassionate and thorough in their care. I highly recommend this clinic."
                            author="Emily Johnson"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className="text-center text-danger mt-3">Need to schedule a doctor's appointment?</div>
                <div className="text-center text-primary mb-3">Our specialists are ready to help. Contact us now!</div>
                <div className="text-center">
                    <Button variant="danger" onClick={showModalLogin}>Sign In</Button>
                </div>
            </div>
        </Container>
    );
};

export default MainPageTestimonials;









