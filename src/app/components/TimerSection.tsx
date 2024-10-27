'use client';
import useCountDown from '@/hooks/useCountDownTimer';
import { Bodoni_Moda } from 'next/font/google';
interface TimerSectionProps {
	targetDate: string;
}

const serif = Bodoni_Moda({
	weight: '400',
	subsets: ['latin'],
});
const TimerSection = ({ targetDate }: TimerSectionProps) => {
	const { days, hours, minutes, seconds } = useCountDown(new Date(targetDate));
	return (
		<section
			className="min-w-full min-h-36 flex items-center py-20 justify-center"
			id="count-down-section"
		>
			<div className="container flex flex-col items-center justify-center">
				<h2 className={`${serif.className} text-3xl mb-10`}>The Countdown</h2>
				<div className="flex md:flex-row flex-col-reverse align-middle items-center gap-10 text-7xl">
					<p>{days} </p>
					<p className="text-3xl">days</p>
					<p> {hours} </p>
					<p className="text-3xl">hours</p>
					<p> {minutes} </p>
					<p className="text-3xl">minutes</p>
					<p> {seconds}</p>
					<p className="text-3xl">seconds</p>
				</div>
			</div>
		</section>
	);
};
export default TimerSection;
