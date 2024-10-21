"use client";
import { useCountDownTimer } from "@/utils/useCountDownTimer";
interface TimerSectionProps {
  targetDate: string;
}
const TimerSection = ({ targetDate }: TimerSectionProps) => {
  const { days, hours, minutes, seconds } = useCountDownTimer(
    new Date(targetDate).getTime(),
  );
  return (
    <section>
      <span>{days} days</span>
      <span>{hours} hours</span>
      <span>{minutes} minutes</span>
      <span>{seconds} seconds</span>
    </section>
  );
};
export default TimerSection;
