import { useEffect, useState } from 'react';
import countDownTimer from '@/utils/countDownTimer';

const useCountDown = (targetDate: Date) => {
	const countDownDate = new Date(targetDate).getTime();
	const [countDown, setCountDown] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return countDownTimer(countDown);
};

export default useCountDown;
