import React from 'react';
import { render } from '@testing-library/react';
import MyAppointmentsTable from "./MyAppointmentsTable"
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';


describe('MyAppointmentsTable', () => {

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

    it('renders Filter', () => {
        const label = 'My Appointments';

        const { container } = render(
            
            <MyAppointmentsTable appointments={null} doctorAppointments={null} deleteAppointment={()=>{}} />
                    );
        expect(container.querySelector('.empty_table_list')).toBeInTheDocument();
    });

})