import { useEffect, useState } from "react";
import "./topNavbar.css";
const TopNavbar = () => {
  const targetDate = new Date("December 31, 2023 23:59:59").getTime();
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // console.log("Running time", timeRemaining);
  return (
    <div className="top_nav_main w-100 p-2 pt-3 pb-3 d-flex justify-content-center align-center">
      <div className="top_nav_wrapper">
        <div>
          <span className="text-nowrap">Save 30% sitewidget! Ends in</span>
        </div>

        <div className="top_nav_timer">
          <span className="ms-2 days ps-2 pe-2 pt-1 pb-1 rounded-1 fw-bold">
            {timeRemaining?.days}
            <span className="d_sign fw-light ms-1">d</span>
          </span>{" "}
          <span className="ms-2 days ps-2 pe-2 pt-1 pb-1 rounded-1 fw-bold">
            {timeRemaining?.hours}
            <span className="d_sign fw-light ms-1">h</span>
          </span>{" "}
          <span className="ms-2 days ps-2 pe-2 pt-1 pb-1 rounded-1 fw-bold">
            {timeRemaining?.minutes}
            <span className="d_sign fw-light ms-1">m</span>
          </span>{" "}
          <span>:</span>
          <span className="ms-2 days ps-2 pe-2 pt-1 pb-1 rounded-1 fw-bold">
            {timeRemaining?.seconds}
            <span className="d_sign fw-light ms-1">s</span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
