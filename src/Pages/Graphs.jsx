// OrderGraphs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Graphs = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    // Fetch the data from the backend
    axios.get('http://localhost:8100/api/order/')
      .then(response => {
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
          // Fetch user details for each product
          response.data.products.forEach(product => {
            if (product.user) {
              axios.get(`http://localhost:8100/api/auth/${product.user}`)
                .then(userResponse => {
                  setUsers(prevUsers => ({
                    ...prevUsers,
                    [product.user]: userResponse.data,
                  }));
                })
                .catch(error => {
                  console.error('Error fetching user data:', error);
                });
            }
          });
        } else {
          console.error('Expected an array but received:', response.data.products);
        }
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  }, []);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  // Process data for the first graph (labeled vs non-labeled)
  const labeledData = {
    labeled: products.filter(product => product.label1.trim() || product.label2.trim()).length,
    nonLabeled: products.filter(product => !product.label1.trim() && !product.label2.trim()).length,
  };

  const pieData = {
    labels: ['Labeled', 'Non-Labeled'],
    datasets: [{
      data: [labeledData.labeled, labeledData.nonLabeled],
      backgroundColor: ['#FF6384', '#36A2EB'],
    }],
  };

  // Process data for the second graph (age groups)
  const ageGroups = {
    '18-25': 0,
    '26-35': 0,
    '36-45': 0,
    '46-60': 0,
    '60+': 0,
  };

  products.forEach(product => {
    const user1 = users[product.user];
    if (user1 && user1.user.age) {
      const age = user1.user.age;
      if (age >= 18 && age <= 25) ageGroups['18-25']++;
      else if (age >= 26 && age <= 35) ageGroups['26-35']++;
      else if (age >= 36 && age <= 45) ageGroups['36-45']++;
      else if (age >= 46 && age <= 60) ageGroups['46-60']++;
      else if (age > 60) ageGroups['60+']++;
    }
  });

  const barData = {
    labels: Object.keys(ageGroups),
    datasets: [{
      label: 'Items Bought',
      data: Object.values(ageGroups),
      backgroundColor: '#FFCE56',
    }],
  };

  // Process data for the third graph (profession and labeled/non-labeled products)
  const professions = {
    working: { labeled: 0, nonLabeled: 0 },
    student: { labeled: 0, nonLabeled: 0 },
    retired: { labeled: 0, nonLabeled: 0 },
    others: { labeled: 0, nonLabeled: 0 },
  };

  products.forEach(product => {
    const user1 = users[product.user];
    if (user1 && user1.user.occupation) {
      const occupation = user1.user.occupation;
      const isLabeled = product.label1.trim() || product.label2.trim();
      if (professions[occupation] !== undefined) {
        if (isLabeled) {
          professions[occupation].labeled++;
        } else {
          professions[occupation].nonLabeled++;
        }
      } else {
        if (isLabeled) {
          professions['others'].labeled++;
        } else {
          professions['others'].nonLabeled++;
        }
      }
    }
  });

  // Define colors for each profession
  const professionColors = {
    working: '#FF6384',
    student: '#36A2EB',
    retired: '#FFCE56',
    others: '#4BC0C0',
  };

  const doughnutData = {
    labels: Object.keys(professions),
    datasets: [{
      label: 'Labeled',
      data: Object.values(professions).map(prof => prof.labeled),
      backgroundColor: Object.keys(professions).map(prof => professionColors[prof] || '#999'),
    }, {
      label: 'Non-Labeled',
      data: Object.values(professions).map(prof => prof.nonLabeled),
      backgroundColor: Object.keys(professions).map(prof => professionColors[prof] || '#999'),
    }],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Graphs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Labeled vs Non-Labeled Products</h2>
          <Pie data={pieData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Age Groups Buying Items</h2>
          <Bar data={barData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Items Bought by Profession</h2>
          <Doughnut 
            data={doughnutData} 
            plugins={[ChartDataLabels]} 
            options={{
              plugins: {
                datalabels: {
                  color: '#fff',
                  display: true,
                  formatter: (value, context) => {
                    return context.dataset.data[context.dataIndex];
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Graphs;
