import React, { useState } from 'react'
import { Timer } from '.';

export const TimerWrapper = ({ duration, onExpiry, beforeRestart }) => {
    const [hasExpired, setExpired] = useState(false);

    const handleExpiry = () => {
        onExpiry && onExpiry();
        setExpired(true);
    }

    return hasExpired ? (
        <button onClick={() => { beforeRestart && beforeRestart(); setExpired(false) }}>Reset</button >) :
        (<Timer duration={duration} onExpiry={handleExpiry} />)
};