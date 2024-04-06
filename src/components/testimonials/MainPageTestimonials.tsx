import React, { useEffect, useState } from 'react';
import TestimonialsCard from './TestimonialsCard';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import Testimonials from '../../assets/data/testimonials.json';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



type TTestimonial = {
    text: string;
    author: string;
}

const MainPageTestimonials = () => {

    const [testimonialsList, setTestimonialsList] = useState<TTestimonial[] | null>(null);

    const dispatch = useDispatch();

    const showModalLogin = () => {
        dispatch(openModal("login"));
    };

    useEffect( () => {
        console.log(Testimonials)
        setTestimonialsList(Testimonials);
    }, [])
    return (
        <Container>
            <div className="main-page-testimonials">
                <h2 className="text-center text-black">Testimonials</h2>
                <h3 className="text-center text-primary">What Patients Say About Us</h3>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={ { delay: 5000 } }
                    autoHeight={true}
                    effect={'fade'}
                    pagination={true} 
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper py-5 my-3"
                >
                    { testimonialsList?.length && 
                        testimonialsList?.map( (testimonialMessage, index) => 
                            <SwiperSlide key={index}>
                            <TestimonialsCard
                                text={testimonialMessage.text}
                                author={testimonialMessage.author}
                            />
                        </SwiperSlide>
                        )
                    }
                    
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









