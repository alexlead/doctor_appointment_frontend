import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination';
interface IMyAppointmentsPaginationProps {
}

const MyAppointmentsPagination: React.FunctionComponent<IMyAppointmentsPaginationProps> = (props) => {
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  return (
    <div className="my-3">
        <Pagination>{items}</Pagination>
    </div>
  );
};

export default MyAppointmentsPagination;
