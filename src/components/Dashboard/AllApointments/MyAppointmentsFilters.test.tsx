import React from 'react';
import { render } from '@testing-library/react';
import MyAppointmentsFilters from "./MyAppointmentsFilters"
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import MyAppointments, { filterDates } from './MyAppointments';


describe('MyAppointmentsFilters', () => {

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
        const data: filterDates = {
            startDate: "4/3/2024",
            endDate: "4/5/2024"
          }
        const { container } = render(
            <Provider store={store}>

                <MyAppointmentsFilters filter={data} appyFilter={()=>{}} />
            </Provider>
                    );
        expect(container.querySelector('.form-control')).toBeInTheDocument();
    });

})