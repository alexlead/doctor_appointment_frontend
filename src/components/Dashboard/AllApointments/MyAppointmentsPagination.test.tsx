import React from 'react';
import { render } from '@testing-library/react';
import MyAppointmentsPagination from "./MyAppointmentsPagination"


describe('MyAppointmentsPagination', () => {

 it( 'Test Pagination Rendering', () => {

    const totalPages = 3;
    const page = 2;
    const { container }  = render( <MyAppointmentsPagination total={totalPages} currentPage={page} selectPage={()=>{}} />)

    expect(container.querySelector('.pagination')).toBeInTheDocument();
    
 })
 it( 'Test Pagination Rendering', () => {

    const totalPages = 3;
    const page = 2;
    const { container }  = render( <MyAppointmentsPagination total={totalPages} currentPage={page} selectPage={()=>{}} />)

    expect(container.querySelectorAll('.page-item').length).toEqual(3);
    
 })
})