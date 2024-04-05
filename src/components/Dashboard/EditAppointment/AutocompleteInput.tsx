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
      {/* <span className="clear" click="search = ''">x</span> */}
      {/* <div className="tips">
        <ul>
          <li
            v-for="item of filteredCountries"
            key="item.code"
            // click="search = item.name"
          >
        <span>{ item.name }</span> 
          </li>
        </ul>
      </div> */}
    </div>
  ) ;
};

export default AutocompleteInput;
