import * as React from 'react';
import { TPatientForAppointment } from '../../../api/patientAppointmentsApi';

interface IAutocompleteInputProps {
    patient: TPatientForAppointment | null;
}

const AutocompleteInput: React.FunctionComponent<IAutocompleteInputProps> = ({patient}) => {
  

  
    return (
    <div className="autocomplete">
      {
        patient &&
      <input type="text" name="search" v-model="search" value={patient.patientId.name + " " + patient.patientId.surname} disabled={true}/>
      }

    </div>
  ) ;
};

export default AutocompleteInput;
