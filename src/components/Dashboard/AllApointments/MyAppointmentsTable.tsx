import * as React from 'react';
import { Button, Table } from 'react-bootstrap';

interface IMyAppointmentsTableProps {
}

const MyAppointmentsTable: React.FunctionComponent<IMyAppointmentsTableProps> = (props) => {



  return (
    <div className="">
      <Table size='lg' responsive striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>27.02.2024</td>
            <td>10:00 - 10:30</td>
            <td>Dr. Jogan Schtefan</td>
            <td>

              <Button className=' mx-1 my-2' variant="primary" type="button">
                View
              </Button>
              <Button className=' mx-1 my-2' variant="danger" type="button">
                Cancel
              </Button>

            </td>
          </tr>
          <tr>
            <td>27.02.2024</td>
            <td>10:00 - 10:30</td>
            <td>Dr. Jogan Schtefan</td>
            <td>

              <Button className=' mx-1 my-2' variant="primary" type="button">
                View
              </Button>
              <Button className=' mx-1 my-2' variant="danger" type="button">
                Cancel
              </Button>

            </td>
          </tr>
          <tr>
            <td>27.02.2024</td>
            <td>10:00 - 10:30</td>
            <td>Dr. Jogan Schtefan</td>
            <td>

              <Button className=' mx-1 my-2' variant="primary" type="button">
                View
              </Button>
              <Button className=' mx-1 my-2' variant="danger" type="button">
                Cancel
              </Button>

            </td>
          </tr>
          <tr>
            <td>27.02.2024</td>
            <td>10:00 - 10:30</td>
            <td>Dr. Jogan Schtefan</td>
            <td>

              <Button className=' mx-1 my-2' variant="primary" type="button">
                View
              </Button>
              <Button className=' mx-1 my-2' variant="danger" type="button">
                Cancel
              </Button>

            </td>
          </tr>
          <tr>
            <td>27.02.2024</td>
            <td>10:00 - 10:30</td>
            <td>Dr. Jogan Schtefan</td>
            <td>

              <Button className=' mx-1 my-2' variant="primary" type="button">
                View
              </Button>
              <Button className=' mx-1 my-2' variant="danger" type="button">
                Cancel
              </Button>

            </td>
          </tr>
          <tr>
            <td>27.02.2024</td>
            <td>10:00 - 10:30</td>
            <td>Dr. Jogan Schtefan</td>
            <td>

              <Button className=' mx-1 my-2' variant="primary" type="button">
                View
              </Button>
              <Button className=' mx-1 my-2' variant="danger" type="button">
                Cancel
              </Button>

            </td>
          </tr>


        </tbody>
      </Table>
    </div>
  );
};

export default MyAppointmentsTable;
