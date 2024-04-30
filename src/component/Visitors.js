import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const Visitors = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    // Increment the visitor count when the component mounts
    axios.get('http://localhost:5000/api/increment-visitor')
      .then(() => {
        // Fetch the updated total visitors
        axios.get('http://localhost:5000/api/total-visitors')
          .then((response) => setTotalVisitors(response.data.totalVisitors))
          .catch((error) => console.error('Error fetching total visitors:', error));
      })
      .catch((error) => console.error('Error incrementing visitor count:', error));
  }, []); // This will run once on component mount

  return (
    <div>
      <Typography variant="h5">Total Visitors: {totalVisitors}</Typography>
      {/* Other components */}
    </div>
  );
};

export default Visitors;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Typography } from '@mui/material';

// const Visitors = () => {
//   const [totalVisitors, setTotalVisitors] = useState(0);

//   useEffect(() => {
//     // Fetch total visitors from the server
//     axios.get('http://localhost:5000/api/total-visitors')
//   .then((response) => setTotalVisitors(response.data.totalVisitors))
//   .catch((error) => console.error('Error fetching total visitors:', error));

    
// //     axios
// //       .get('/api/total-visitors')
// //       .then((response) => setTotalVisitors(response.data.totalVisitors))
// //       .catch((error) => console.error('Error fetching total visitors:', error));
//   }, []); // This will run once on component mount

//   const handleIncrement = () => {
//     // Increment the visitor count
//     // axios.get('/api/increment-visitor')
//     // .then(() => {
//     //   // Fetch the updated total visitors
//     //   axios.get('/api/total-visitors')
//     //     .then((response) => setTotalVisitors(response.data.totalVisitors))
//     //     .catch((error) => console.error('Error fetching total visitors:', error));
//     // })
//     // .catch((error) => console.error('Error incrementing visitor count:', error));
  
   
//     axios
//       .get('http://localhost:5000/api/increment-visitor')
//       .then(() => {
//         // After incrementing, fetch the updated total visitors
//         axios
//           .get('http://localhost:5000/api/total-visitors')
//           .then((response) => setTotalVisitors(response.data.totalVisitors))
//           .catch((error) => console.error('Error fetching total visitors:', error));
//       })
//       .catch((error) => console.error('Error incrementing visitor count:', error));
//   };

//   return (
//     <div>
//       <Typography variant="h5">Total Visitors: {totalVisitors}</Typography>
//       <button onClick={handleIncrement}>Increment Visitor Count</button>
//       {/* Other components */}
//     </div>
//   );
// };

// export default Visitors;



