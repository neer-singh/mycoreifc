// import {
//   Card as MuiCard,
//   CardContent,
//   makeStyles,
//   Typography,
// } from '@material-ui/core';
// import React, { useEffect, useState } from 'react';
// import Odometer from 'react-odometerjs';
// import 'odometer/themes/odometer-theme-default.css';

// const useStyles = makeStyles((theme) => ({
//   pageContent: {
//     borderTop: '5px solid green',
//     borderBottom: '5px solid transparent',
//     width: '100%',
//     justifyContent: 'space-between',
//     '&:hover': {
//       borderBottom: '5px solid green',
//       cursor: 'pointer',
//     },
//   },
//   odometer: {
//     display: 'flex',
//   },
//   emptydiv: {
//     display: 'flex',
//     flex: '1',
//   },
//   title: {
//     backgroundColor: '#007713',
//     backgroundImage: ' linear-gradient(149deg, #007713 0%, #1cf79d 100%)',
//     borderRadius: '7px',
//     marginBottom: theme.spacing(3),
//   },
//   green: {
//     display: 'flex',
//     color: 'green ',
//   },
//   typographyTotal: {
//     display: 'flex',
//     color: 'rgba(0, 0, 0, 0.54)',
//   },
//   typographyChecked: {
//     display: 'flex',
//     color: 'green',
//   },
//   typographyUncheked: {
//     display: 'flex',
//     color: 'red',
//   },
// }));
// const Card = (props) => {
//   const classes = useStyles();
//   const { total, checked, unchecked, title } = props;
//   const [totalValue, settotalValue] = useState(0);
//   const [checkedValue, setCheckedValue] = useState(0);
//   const [uncheckedValue, setUncheckedValue] = useState(0);
//   useEffect(() => {
//     settotalValue(total);
//     setCheckedValue(checked);
//     setUncheckedValue(unchecked);
//   }, [total, checked, unchecked]);
//   return (
//     <>
//       <MuiCard className={classes.pageContent}>
//         <CardContent>
//           <Typography variant='h5' className={classes.title}>
//             {title}
//           </Typography>
//           <div className={classes.typographyTotal}>
//             <Typography
//               color='textSecondary'
//               variant='body1'
//               className={classes.odometer}>
//               Total
//             </Typography>
//             <div className={classes.emptydiv}></div>
//             <Odometer duration={300} value={totalValue} format='(.ddd)' />
//           </div>
//           <div className={classes.typographyChecked}>
//             <Typography
//               color='textPrimary'
//               variant='body1'
//               className={classes.green}>
//               Checked
//             </Typography>
//             <div className={classes.emptydiv}></div>

//             <Odometer duration={300} value={checkedValue} format='(.ddd)' />
//           </div>
//           <div className={classes.typographyUncheked}>
//             <Typography
//               color='error'
//               variant='body1'
//               className={classes.odometer}>
//               Unchecked
//             </Typography>
//             <div className={classes.emptydiv}></div>
//             <Odometer duration={300} value={uncheckedValue} format='(.ddd)' />
//           </div>
//         </CardContent>
//       </MuiCard>
//     </>
//   );
// };

// export default Card;
import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import './card.css';
const Card = (props) => {
  const { total, checked, unchecked, title } = props;
  const [totalValue, settotalValue] = useState(0);
  const [checkedValue, setCheckedValue] = useState(0);
  const [uncheckedValue, setUncheckedValue] = useState(0);
  useEffect(() => {
    settotalValue(total);
    setCheckedValue(checked);
    setUncheckedValue(unchecked);
  }, [total, checked, unchecked]);
  return (
    <>
      <CCard className='ccontainer'>
        <CCardHeader className='title text-black-50 m-3 rounded d-flex justify-content-center'>
          <h2>{title}</h2>
        </CCardHeader>
        <CCardBody className='cardBody'>
          <div className='d-flex justify-content-between text-dark'>
            <h5>Total</h5>
            <Odometer duration={300} value={totalValue} format='(.ddd)' />
          </div>
          <div className='d-flex justify-content-between text-success'>
            <h5>Checked</h5>
            <Odometer duration={300} value={checkedValue} format='(.ddd)' />
          </div>
          <div className='d-flex justify-content-between text-danger'>
            <h5>Uncheked</h5>
            <Odometer duration={300} value={uncheckedValue} format='(.ddd)' />
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Card;
