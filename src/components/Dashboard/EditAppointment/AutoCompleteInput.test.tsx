import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import AutocompleteInput from './AutocompleteInput';
import { TPatientForAppointment } from '../../../api/patientAppointmentsApi';

describe('AutocompleteInput', () => { 

    it('renders without file', () => {
        const patient : TPatientForAppointment = {
            patientId: {
                id: 1,
                name: "Name",
                surname: "Surname"
              }
        };
        const { getByDisplayValue } = render(

            <AutocompleteInput patient={patient}/>

        );
        expect(getByDisplayValue("Name Surname")).toBeInTheDocument();
    });
})