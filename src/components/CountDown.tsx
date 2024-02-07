"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-02-15");

const CountDown = () => {
  return (
    <div>
      <Countdown
        className="text-yellow-300 font-bold text-5xl"
        date={endingDate}
      />
    </div>
  );
};

export default CountDown;
