import React, { useEffect, useState } from 'react'
import "./styles.css";

export const Timer = ({ duration, onExpiry }) => {
    const [time, setTime] = useState(duration);
    const seconds = convertMS(time, "seconds");
    const minutes = convertMS(time, "minutes");
    const hours = convertMS(time, "hours");
    const days = convertMS(time, "days");

    function convertMS(ms, key) {
        let seconds = Math.floor(ms / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds = seconds % 60;
        minutes = minutes % 60;
        hours = hours % 24;

        if (key === "seconds")
            return seconds;
        if (key === "minutes")
            return minutes;
        if (key === "hours")
            return hours;
        if (key === "days")
            return days;
    }
    useEffect(() => {
        const timerId = setTimeout(() => {
            setTime(time - 1000);
        }, 1000); // screen pe show krne ahi wo time state variable se ho ra h, but ek timer jo time measure krega actual ek second wo bhi 
        // toh krn ahai and tahts through 1000 in the duration
        if (time <= 0) {
            onExpiry && onExpiry();
            clearTimeout(timerId);
        }
        return () => clearTimeout(timerId); //since this useEFfect depens on time state variable and that will be changin every 1 sec
        // dur to setTimeout so this clean up ill be triggered whenever this state variable causes a rerender
        // so order is time satet var changes, it triggers rerender before that its equivalent cleanup of the dependedn useEffect is called then screen updates
        // and then associatd useEFfect trigger after rerender commit ie after do change
    }, [time]);

    return (
        <div className='timer'>
            <p>{days}</p>:
            <p>{hours}</p>:
            <p>{minutes}</p>:
            <p>{seconds}</p>
        </div>
    )
}
