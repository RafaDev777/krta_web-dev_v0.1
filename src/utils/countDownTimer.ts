const countDownTimer = (timeRemaining: number) => {
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  const minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  return { seconds, minutes, hours, days };
};

export default countDownTimer;
