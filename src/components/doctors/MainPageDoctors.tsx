import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';

import doctor1 from '../../assets/images/doctor1.png';
import doctor2 from '../../assets/images/doctor2.png';
import doctor3 from '../../assets/images/doctor3.png';

const MainPageDoctors = () => {
    const dispatch = useDispatch();

    const showModalLogin = () => {
        dispatch(openModal("login"));
    };

    return (
        <Container>
            <div className="main-page-doctors-heading text-center text-black mb-4">
                <h2>Our team of experienced doctors and caring staff is ready to provide you with the care and attention you deserve.</h2>
                <div className="doctors-subheading">Our Doctors</div>
            </div>
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
                    <div className="doctor-container">
                        <img src={doctor1} alt="Doctor 1" />
                        <div className="doctor-info">
                            <h4 className="doctor-name">Dr. Christopher Brown</h4>
                            <Button variant="doctor-sign-in" onClick={showModalLogin}>Sign In</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="doctor-container">
                        <img src={doctor2} alt="Doctor 2" />
                        <div className="doctor-info">
                            <h4 className="doctor-name">Dr. Michael Smith</h4>
                            <Button variant="doctor-sign-in" onClick={showModalLogin}>Sign In</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="doctor-container">
                        <img src={doctor3} alt="Doctor 3" />
                        <div className="doctor-info">
                            <h4 className="doctor-name">Dr. Jennifer Davis</h4>
                            <Button variant="doctor-sign-in" onClick={showModalLogin}>Sign In</Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default MainPageDoctors;
