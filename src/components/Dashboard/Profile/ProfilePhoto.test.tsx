import React from 'react';
import { render } from '@testing-library/react';
import ProfilePhoto from './ProfilePhoto';
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';

describe('ProfilePhoto', () => {
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

    it('renders without file', () => {
        const label = 'Upload Your Photo';
        const { getByText } = render(
            <Provider store={store}>
                <ProfilePhoto userMetaPhoto={""} updatePhoto={() => { }} />
            </Provider>
        );
        expect(getByText(label)).toBeInTheDocument();
    });
    it('renders with file', () => {
        const sampleFile = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVQYlWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==";
        const { container } = render(
            <Provider store={store}>
                <ProfilePhoto userMetaPhoto={sampleFile} updatePhoto={() => { }} />
            </Provider>
        );
        expect(container.querySelector('img')).toBeInTheDocument();
    });


})