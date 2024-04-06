import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openModal, setErrorMessage } from '../../store/slices/modalSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import DoctorCard from './DoctorCard';
import { getDoctorsWithPhoto } from '../../api/doctorsList';

export interface doctorData {
    id: number;
    name: string;
    surname: string;
    photo: string;
}

const MainPageDoctors = () => {


    const [doctorsList, setDoctorsList ] = useState<doctorData[] | null>(null);
    const dispatch = useDispatch();

    const getDoctorsList = async () => {
        try {
        const res = await getDoctorsWithPhoto();
        const data = await res.json();

        setDoctorsList(data)

        } catch (error) {
            console.log(error);
            dispatch(setErrorMessage("Connection error. Please try again few minutes later."));
            dispatch(openModal("error"));
        }

    }


    useEffect(()=>{
        getDoctorsList();
    },[])

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
                autoplay={{ delay: 6000 }}
                className="mySwiper py-5 my-2"
                // navigation={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation, Autoplay]}
                
            >

{
    doctorsList?.length && 
            doctorsList?.map (  (doc, index) => 
            <SwiperSlide key={index}>
                    <DoctorCard doctorData={doc}/>
                </SwiperSlide>
                )
}

            </Swiper>
        </Container>
    );
};

export default MainPageDoctors;
