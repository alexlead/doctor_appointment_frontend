import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination';
interface IMyAppointmentsPaginationProps {
  total: number;
  currentPage: number;
  selectPage: (id: number)=>void;

}

const MyAppointmentsPagination: React.FunctionComponent<IMyAppointmentsPaginationProps> = ({total, currentPage, selectPage}) => {
let items = [];
for (let number = 1; number <= total; number++) {
  items.push(
    <Pagination.Item key={number} active={number === currentPage} onClick={()=>selectPage(number)}>
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
