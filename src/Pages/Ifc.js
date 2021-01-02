import React from 'react';
import Card from '../Components/Card';
import './ifc.css';
import { Link } from 'react-router-dom';
import { CCol, CContainer, CRow } from '@coreui/react';

const Ifc = () => {
  return (
    <>
      <CContainer fluid>
        <CRow>
          <CCol lg='6' md='6' sm='12'>
            <Link to='/ap' className='linkclass'>
              <Card total={20} checked={2} unchecked={18} title='AP' />
            </Link>
          </CCol>
          <CCol lg='6' md='6' sm='12'>
            <Link to='/p2p' className='linkclass'>
              <Card total={20} checked={5} unchecked={15} title='P2P' />
            </Link>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Ifc;
