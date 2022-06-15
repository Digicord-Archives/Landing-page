import React from 'react';
import CountdownTimer from './CountdownTimer';
import './timer.css'


const Timer = () => {
  const Thirty_five_days_ms = 35*24*60*60*1000;
  const Now_ms = new Date().getTime();
  const Total_time_for_coming_soon = Thirty_five_days_ms + Now_ms;

  return (
    <div className='timer'>
      <CountdownTimer targetDate={Total_time_for_coming_soon}/>
    </div>
  )
}

export default Timer