import React from 'react';
import { render } from '@testing-library/react';
import DashboardSidebar from "./DashboardSidebar"
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

describe('DashboardSidebar', () => {

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

    it('renders Sidebar', () => {
        const label = 'My Appointments';
        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/dashboard']}>
                <DashboardSidebar />
                </MemoryRouter>
            </Provider>
        );
        expect(getByText(label)).toBeInTheDocument();
    });

})