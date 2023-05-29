import { useState, useEffect, useCallback } from 'react';

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const CountdownTimer = ({ targetDate = '2023-07-31T23:59:59' }) => {
	const calculateTimeLeft = useCallback((): TimeLeft => {
		const difference = +new Date(targetDate) - +new Date();
		let timeLeft: TimeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}

		return timeLeft;
	}, [targetDate]);

	const formatTimeValue = (value: number): string => {
		return value < 10 ? `0${value}` : `${value}`;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const timer = setTimeout(() => {
				setTimeLeft(calculateTimeLeft());
			}, 1000);

			return () => clearTimeout(timer);
		}
	});

	const { days, hours, minutes, seconds } = timeLeft;
	return (
		<div className="-mt-[68vh] flex justify-between text-[60px] font-semibold text-[#ffffff0d] md:text-[100px] xl:-mt-[55vh] xl:text-[200px]">
			<div className="flex w-[250px] flex-col items-center">
				<div>{formatTimeValue(days)}</div>
				<div className="text-[20px] md:text-[40px] xl:text-[70px]">days</div>
			</div>
			<div>:</div>
			<div className="flex w-[250px] flex-col items-center">
				<div>{formatTimeValue(hours)}</div>
				<div className="text-[20px] md:text-[40px] xl:text-[70px]">hrs</div>
			</div>
			<div>:</div>
			<div className="flex w-[250px] flex-col items-center">
				<div>{formatTimeValue(minutes)}</div>
				<div className="text-[20px] md:text-[40px] xl:text-[70px]">min</div>
			</div>
			<div>:</div>
			<div className="flex w-[250px] flex-col items-center">
				<div>{formatTimeValue(seconds)}</div>
				<div className="text-[20px] md:text-[40px] xl:text-[70px]">sec</div>
			</div>
		</div>
	);
};

export default CountdownTimer;
