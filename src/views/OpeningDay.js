import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function OpeningDay() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('March 31 2022 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <section className="time-container">
        <section className="timer">
          <div className="countdown-header">
            <h2>Countdown To Opening Day</h2>
            <Link className="nav-link active" to="/">
              Spring Training Countdown
            </Link>
            <a
              href="https://www.mlb.com/schedule"
              target="_blank"
              rel="noreferrer noopener"
              className="links"
            >
              MLB Schedule
            </a>
            <br />
            <a
              href="https://www.mlb.com/tickets"
              target="_blank"
              rel="noreferrer noopener"
              className="links"
            >
              Get tickets to a game!
            </a>
          </div>
          <br />
          <div className="count-down-timer">
            <section>
              <p>{timerDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
