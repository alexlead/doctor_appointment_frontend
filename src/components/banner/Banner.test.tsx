import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Banner from './Banner'; 

describe('Banner component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Banner />
      </Provider>
    );

    expect(getByText('Welcome to House Care Center - Your Home for Family Wellness!')).toBeInTheDocument();
    
    expect(getByText('Our specialists are ready to help. Contact us now')).toBeInTheDocument();
   
    expect(getByText('Sign In')).toBeInTheDocument();
  });
});