"use client";
import useCountDown from "@/hooks/useCountDownTimer";
interface TimerSectionProps {
  targetDate: string;
}
const TimerSection = ({ targetDate }: TimerSectionProps) => {
  const { days, hours, minutes, seconds } = useCountDown(new Date(targetDate));
  return (
    <section
      className="min-w-svw min-h-24 flex items-center justify-center bg-blue-400"
      id="count-down-section"
    >
      <div className="container flex flex-col items-center justify-center bg-blue-200">
        <h1 className="">Test</h1>
        <div className="flex flex-row gap-5">
          <p>{days} </p>
          <p>:</p>
          <p> {hours} </p>
          <p>:</p>
          <p> {minutes} </p>
          <p>:</p>
          <p> {seconds}</p>
        </div>
      </div>
    </section>
  );
};
export default TimerSection;
