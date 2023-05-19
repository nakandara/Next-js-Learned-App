import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const responce = await fetch("http://localhost:4000/dashboard");
      const data = await responce.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading.......</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>posts - {dashboardData.posts}</h2>
      <h2>Dashboard - {dashboardData.likes}</h2>
      <h2>Dashboard - {dashboardData.followers}</h2>
      <h2>Dashboard - {dashboardData.following}</h2>
    </div>
  );
}

export default Dashboard;





// import React, { useState } from 'react';
// import Select from 'react-select';

// function Dashboard() {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const options = [
//     { value: 'Option 1', label: 'Option 1' },
//     { value: 'Option 2', label: 'Option 2' },
//     { value: 'Option 3', label: 'Option 3' },
//     { value: 'Option 4', label: 'Option 4' },
//     { value: 'Option 5', label: 'Option 5' }
//   ];

//   const handleChange = (selected) => {
//     setSelectedOptions(selected);
//   };

//   return (
//     <Select
//       value={selectedOptions}
//       onChange={handleChange}
//       options={options}
//       isMulti={true}
//     />
//   );
// }

// export default Dashboard;
// import React, { useState } from 'react';

// function Dashboard() {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const options = [
//     { value: 'Option 1', label: 'Option 1' },
//     { value: 'Option 2', label: 'Option 2' },
//     { value: 'Option 3', label: 'Option 3' },
//     { value: 'Option 4', label: 'Option 4' },
//     { value: 'Option 5', label: 'Option 5' }
//   ];

//   const handleChange = (event) => {
//     const options = event.target.options;
//     const selectedOptions = [];

//     for (let i = 0; i < options.length; i++) {
//       if (options[i].selected) {
//         selectedOptions.push(options[i].value);
//       }
//     }

//     setSelectedOptions(selectedOptions);
//   };

//   return (
//     <div>
//       <select multiple value={selectedOptions} onChange={handleChange}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       <p>Selected options: {selectedOptions.join(', ')}</p>
//     </div>
//   );
// }

// export default Dashboard;