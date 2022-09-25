import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

type TimerProps = {
    // playAgain?: boolean,
    expiryTimeStamp: Date,
    beginGame: () => void,
    endGame: () => void
}

const Timer = (props: TimerProps) => {

    const [preGameCountdown, setPreGameCountdown] = useState(true);

    useEffect(() => {
        if (!preGameCountdown) {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 10);
            restart(time);
        }
    }, [preGameCountdown])

    useEffect(() => {
        setPreGameCountdown(true);
        restart(props.expiryTimeStamp);
    }, [props.expiryTimeStamp])

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: props.expiryTimeStamp, onExpire: () => gameFlow() });

    const gameFlow = () => {
        if (preGameCountdown) {
            setPreGameCountdown(false);
            props.beginGame();
        }
        else {
            props.endGame();
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '50px' }}>
                <span hidden={!preGameCountdown}>Begin in </span>
                <span>{seconds}</span>
            </div>
        </div>
    );
}

export default Timer;