import React, {useState} from 'react'
import './timer.css'

const Timer = () => {
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  let interval;
  const timer = () => {
    let countDownDate = new Date('July 18, 2022').getTime();
    
    interval = setInterval(() => {
        const now = new Date().getTime() 
        const distance = countDownDate - now;
        
        const countDays = Math.floor(distance/(24 * 60 * 60 * 1000));
        const countHours = Math.floor (distance % (24 * 60 * 60 * 1000)/(1000*60*60));
        const countMinutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60))
        const countSeconds = Math.floor(distance % (1000 * 60 ) / (1000))

        if (distance < 0){
          //stop timer
          clearInterval(interval.current)
        }else{
          //update timer
          setDays(countDays)
          setHours(countHours)
          setMinutes(countMinutes)
          setSeconds(countSeconds)
        }
    })
  }
    timer();
  

  return (
      <section>
        <div className='container'>
            <div className='timer__container'>
            <div className='timer__content'>
                  <div className='timer__header'>
                    <h1>{days}</h1>
                  </div>
                  <div className='timer__item'>
                    <p>Days</p>
                  </div>
                </div>

                <div className='timer__content'>
                  <div className='timer__header'>
                    <h1>{hours}</h1>
                  </div>
                  <div className='timer__item'>
                    <p>Hours</p>
                  </div>
                </div>

                <div className='timer__content'>
                  <div className='timer__header'>
                    <h1>{minutes}</h1>
                  </div>
                  <div className='timer__item'>
                    <p>Minutes</p>
                  </div>
                </div>

                <div className='timer__content'>
                  <div className='timer__header'>
                    <h1>{seconds}</h1>
                  </div>
                  <div className='timer__item'>
                    <p>Seconds</p>
                  </div>
                </div>
            </div>
        </div>
      </section>
    
  )
}

export default Timer
