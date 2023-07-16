import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Direct', 'Social', 'Refeeral'],
    datasets: [
        {
            data: [55, 30, 15],
            backgroundColor: [
                'rgba(78,115,223,255)',
                'rgba(28,200,138,255)',
                '#36b9cc',
            ],

            borderColor: [
                'rgba(78,115,223,255)',
                'rgba(28,200,138,255)',
                '#36b9cc',
            ],
           
            spacing: 5,
           
            
        },
    ],
};

export default function DoughnutChart() {
    return <Doughnut data={data} />;
}
