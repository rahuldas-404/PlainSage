// DoughnutChart.jsx

import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Terrorism Financing', 'Human Trafficking', 'Wildlife Trade', 'Drug Trafficking'],
          datasets: [
            {
              data: [40, 30, 15, 15],
              backgroundColor: ['#f59e0b', '#3b82f6', '#10b981', '#ef4444'],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Global Crime Statistics Breakdown',
            },
          },
        },
      });

      // Cleanup on unmount
      return () => chartInstance.destroy();
    }
  }, []);

  return <canvas ref={chartRef} width="300" height="300"></canvas>;
};

export default DoughnutChart;
