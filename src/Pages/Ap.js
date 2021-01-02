import React, { useState } from 'react';
import { apList } from '../App/Services/ServicesList';
import {
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CDataTable,
} from '@coreui/react';

const Ap = () => {
  const usersData = apList;
  console.log(usersData);
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: 'serial', _style: { width: '5%' } },
    'riskNo',
    { key: 'process', _style: { width: '5%' } },
    { key: 'subProcess', _style: { width: '5%' } },
    { key: 'controlNumber', _style: { width: '10%' } },
    { key: 'controlOwner', _style: { width: '15%' } },
    { key: 'controlEvidence', _style: { width: '60%' } },
    {
      key: 'show_details',
      label: 'Details',
      _style: { width: '1%' },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <CDataTable
      items={usersData}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item, index) => {
          return (
            <td className='py-2'>
              <CButton
                color='primary'
                variant='outline'
                shape='square'
                size='sm'
                onClick={() => {
                  toggleDetails(index);
                }}>
                {details.includes(index) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          );
        },
        details: (item, index) => {
          return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <h6>Testing Steps</h6>
                <p className='text-muted'>{item.testingSteps}</p>
                <h6>Control Description</h6>
                <p className='text-muted'>{item.controlDescription}</p>
                <CButton size='sm' color='info'>
                  User Settings
                </CButton>
                <CButton size='sm' color='danger' className='ml-1'>
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          );
        },
      }}
    />
  );
};

export default Ap;
