import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			grid: {
				display: false // Remove vertical grid lines
			}
		},
		y: {
			beginAtZero: true,
			max: 100,
			ticks: {
				callback: function (value: string) {
					return value + '%';
				},
				stepSize: 25
			},
			grid: {
				color: 'rgba(217, 217, 217, 0.25)'
			}
		}
	},
	plugins: {}
};

const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

export const data = {
	labels,
	datasets: [
		{
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: 'rgba(154, 97, 212, 1)'
		}
	]
};

export default function DashboardColumnChart() {
	// @ts-ignore
	return <Bar options={options} data={data} />;
}
