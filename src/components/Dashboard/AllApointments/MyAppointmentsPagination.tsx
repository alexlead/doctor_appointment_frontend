import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination';
interface IMyAppointmentsPaginationProps {
  total: number;

}

const MyAppointmentsPagination: React.FunctionComponent<IMyAppointmentsPaginationProps> = ({total}) => {
  let active = 1;
let items = [];
for (let number = 1; number <= total; number++) {
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
