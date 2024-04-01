import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import { Button, Col, Row, Container } from 'react-bootstrap'; // Импорт компонента Container
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';

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
                <Row className="testimonials-container">
                    <Col>
                        <TestimonialsCard
                            text="About the clinic: “House Care Center” made an incredible impression on me. The atmosphere of care and professionalism permeates every corner. The staff is attentive, and the doctors provide quality service."
                            author="Robert Jones"
                        />
                    </Col>
                    <Col>
                        <TestimonialsCard
                            text="Dr. Davis is a physician with an exceptional touch. She swiftly and accurately diagnosed my condition, laid out the treatment plan, and patiently addressed all my inquiries. I am thankful for her professionalism."
                            author="Lisa Wilson"
                        />
                    </Col>
                    <Col>
                        <TestimonialsCard
                            text="“House Care Center” is a genuine haven of care. Attention to detail makes every visit enjoyable. The atmosphere is welcoming, and the service is of a consistently high standard."
                            author="Betty Smith"
                        />
                    </Col>
                </Row>
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







