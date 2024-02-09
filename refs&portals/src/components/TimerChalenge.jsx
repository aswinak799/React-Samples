import React, { useRef, useState } from 'react';
import ResultModal from './ResultModal';
const TimerChalenge = ({title, targetTime}) => {
    const timer = useRef();
    const dialog = useRef()
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);
    const activeTimer = remainingTime > 0 && remainingTime < targetTime * 1000;
    if (remainingTime <=0) {
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handlStart(){
        timer.current = setInterval(()=>{
            setRemainingTime(prevTime=> prevTime - 10)
        }, 10);
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setRemainingTime(targetTime * 1000);
    }
    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={remainingTime} onReset={handleReset} result='lost'/>
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p><button onClick={activeTimer? handleStop : handlStart}>{activeTimer ? 'stop' : 'start'} challenge  </button></p>
            <p className={activeTimer ? 'active' : undefined}>
                {activeTimer ? 'Timer is Running... ' : 'Timer Inactive'}
            </p>
        </section>
        </>
    );
}

export default TimerChalenge;
