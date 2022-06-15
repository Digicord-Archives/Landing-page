import React from 'react';
import CountdownTimer from './CountdownTimer';
import './timer.css'


const Timer = () => {
  var countdownTarget = Date.UTC(2022, 7, 18, 8);

  const Thirty_one_days_ms = 31*24*60*60*1000;
  // const Now_ms = new Date().getTime();
  const Total_time_for_coming_soon = countdownTarget - Thirty_one_days_ms;
 

  return (
    <div className='timer'>
      <CountdownTimer targetDate={Total_time_for_coming_soon}/>
    </div>
  )
}

export default Timer