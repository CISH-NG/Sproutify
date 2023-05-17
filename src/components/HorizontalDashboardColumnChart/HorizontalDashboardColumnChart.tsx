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
	indexAxis: 'y' as const,
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			grid: {
				display: false
			},
			ticks: {
				color: 'transparent'
			}
		},
		y: {
			grid: {
				display: false
			}
		}
	}
};

const labels = ['0 - 17', '18 - 26', '27 - 35', '36 - 44', '45 - 53'];
// Define an array of colors for each bar
const backgroundColors = [
	'rgba(249, 220, 146, 1)',
	'rgba(0, 130, 13, 1)',
	'rgba(25, 41, 191, 1)',
	'rgba(222, 0, 0, 1)',
	'rgba(65, 171, 231, 1)'
];

export const data = {
	labels: labels.reverse(),
	datasets: [
		{
			data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
			backgroundColor: backgroundColors,
			// hoverBackgroundColor: 'rgba(240, 240, 240, 1)',
			barThickness: 2
		}
	]
};

export default function HorizontalDashboardColumnChart() {
	// @ts-ignore
	return <Bar options={options} data={data} />;
}
