import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'


function Header() {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
  })
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-IN', {
      minimumIntegerDigits: 2
    })
  }
 

   return (
 <div className="wrap1">
  <div className="container">
    <div className="row">
      <div className="col6 col-mb-12"> 
      <h1><img src="./weather-app.png" alt=""/><span>Weather App</span></h1>
      </div>
      <div className="col6 col-mb-12">
      <div className="mb">
      <div className='clock'>
      <span className='fs'>{convertToTwoDigit(time.hours)}:</span>
      <span className='fs'>{convertToTwoDigit(time.minutes)}:</span>
      <span className='fs'>{convertToTwoDigit(time.seconds)}</span>
      <span className='fs'>{time.hours >= 12 ? ' PM' : ' AM'}</span>
    </div>
      </div>
      </div>
    </div>
  </div>
 </div>
)
}

export default Header;
