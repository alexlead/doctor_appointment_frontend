import React from 'react';
import { render } from '@testing-library/react';
import PreviousAppointmentCard from "./PreviousAppointmentCard"
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { TDetailedAppointment } from '../../api/patientAppointmentsApi';


describe('PreviousAppointmentCard', () => {

    const mockStore = configureStore([]);
    let store: any;
    beforeEach(() => {
        store = mockStore({
            modal: {
                modal: "none",
                errorMessage: ""
            },
            user: {
                user: {
                    name: undefined,
                    surname: undefined,
                    email: undefined
                },
                accessToken: null,
                permissions: null,
                loading: false,
            }
        });
    });

    it('renders Previous Patient visit card', () => {
        const appointment: TDetailedAppointment = {
            id: 10,
            doctorId: {
                id: 4,
                name: "Michael",
                surname: "Schteinbach"
            },
            slotId: {
                id: 5,
                startTime: "10:00:00",
                endTime: "10:30:00"
            },
            date: "2024-04-12",
            visitComplete: true
        }

        const expectedText = "visit Dr. Michael Schteinbach"

        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <PreviousAppointmentCard appointment={appointment} />
                </MemoryRouter>
            </Provider>
        );
        expect(getByText(expectedText)).toBeInTheDocument();
    });

})