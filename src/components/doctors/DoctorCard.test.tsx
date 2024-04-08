import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DoctorCard from './DoctorCard';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { openModal } from '../../store/slices/modalSlice';

describe('DoctorCard', () => {
    const mockDoctorData = {
        id: 1,
        name: 'John',
        surname: 'Doe',
        photo: 'doctor.jpg',
    };

    const mockStore = configureStore<{}>(); 
    let store: MockStoreEnhanced<{}>; 

    beforeEach(() => {
        store = mockStore({});
        store.dispatch = jest.fn();
    });

    it('renders doctor name correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <DoctorCard doctorData={mockDoctorData} />
            </Provider>
        );

        expect(getByText('Dr. John Doe')).toBeInTheDocument();
    });

    it('dispatches openModal action when "Sign In" button is clicked', () => {
        const { getByText } = render(
            <Provider store={store}>
                <DoctorCard doctorData={mockDoctorData} />
            </Provider>
        );

        fireEvent.click(getByText('Sign In'));

        expect(store.dispatch).toHaveBeenCalledWith(openModal('login'));
    });
}); 