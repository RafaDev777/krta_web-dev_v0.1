// "use client";
// import { useCountDownTimer } from "@/utils/useCountDownTimer";
// interface TimerSectionProps {
//   targetDate: string;
// }
// const TimerSection = ({ targetDate }: TimerSectionProps) => {
//   const { days, hours, minutes, seconds } = useCountDownTimer(
//     new Date(targetDate).getTime(),
//   );
//   return (
//     <section>
//       <span>{days} days</span>
//       <span>{hours} hours</span>
//       <span>{minutes} minutes</span>
//       <span>{seconds} seconds</span>
//     </section>
//   );
// };
// export default TimerSection;

"use client";
import { useEffect, useState } from "react";
import { useCountDownTimer } from "@/utils/useCountDownTimer";

interface TimerSectionProps {
  targetDate: string;
}

const TimerSection: React.FC<TimerSectionProps> = ({ targetDate }) => {
  const [isClient, setIsClient] = useState(false); // Track whether we are on the client

  // Make sure the component only renders after it's mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return an empty component for the server-rendered version
    return null;
  }

  const { days, hours, minutes, seconds } = useCountDownTimer(
    new Date(targetDate).getTime(),
  );

  return (
    <section>
      <span>{days} days </span>
      <span>{hours} hours </span>
      <span>{minutes} minutes </span>
      <span>{seconds} seconds</span>
    </section>
  );
};

export default TimerSection;
