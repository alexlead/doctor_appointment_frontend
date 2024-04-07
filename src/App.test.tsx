import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';

jest.mock('./components/testimonials/MainPageTestimonials.tsx', () => ({
  __esModule: true,
  default: () => null // Replace ChildComponent with an empty function
}));

jest.mock('./components/doctors/MainPageDoctors.tsx', () => ({
  __esModule: true,
  default: () => null // Replace ChildComponent with an empty function
}));


describe('App', () => {

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

  it('renders Welcome text in banner', () => {

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const BannerText = screen.getByText(/Welcome to House Care Center/i);
    expect(BannerText).toBeInTheDocument();
  });

})