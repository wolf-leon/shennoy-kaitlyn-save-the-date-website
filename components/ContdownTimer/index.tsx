"use client";

import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
    deadline: Date;
    title: string;
}

interface CountdownTimeLeft {
    days?: number;
    hrs?: number;
    mins?: number;
    secs?: number;
}

const INITIAL_TIME_LEFT: CountdownTimeLeft = { days: 0, hrs: 0, mins: 0, secs: 0 };

function CountdownTimer({ deadline, title }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft(): CountdownTimeLeft {
        let timeLeft: CountdownTimeLeft = {};
        let currentDate = new Date();
        let difference = deadline.getTime() - currentDate.getTime();

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / (1000 * 60)) % 60),
                secs: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    return (
        <div style={{
            backgroundColor: "antiquewhite",
            width: "100%",
            display: 'grid',
            placeItems: 'center',
            padding: '1.2rem 0'
        }}>
            
            <div className="inline-block px-2 py-4 rounded-lg my-4" style={{ background: 'linear-gradient(135deg, #1E90FF 50%, #00BFFF 50%)' }}>
            <h1 className="text-3xl font-bold text-white font-cursive">{title}</h1>
          </div>

            <div style={{
                width: '80%',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '0.5rem'
            }}>
                {
                    Object.entries(timeLeft).map(([unit, value], index, array) => (
                        <div key={unit} className='text-center'>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: 'clamp(1.3rem, 2.5vw, 2.1rem)'
                            }}>
                                <p style={{
                                    margin: '0 4px',
                                    padding: '0.5rem',
                                    background: 'linear-gradient(to bottom, #fdfdfd 50%, #edebeb 50%)',
                                    width: '2.1rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontWeight: 500,
                                    borderRadius: '5px'
                                }}>{Math.floor(value / 10)}</p>
                                <p style={{
                                    margin: '0 4px',
                                    padding: '0.5rem',
                                    background: 'linear-gradient(to bottom, #fdfdfd 50%, #edebeb 50%)',
                                    width: '2.1rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontWeight: 500,
                                    borderRadius: '5px'
                                }}>{value % 10}</p>
                                {index !== array.length - 1 && <span>:</span>}
                            </div>
                            <p style={{
                                textTransform: 'capitalize',
                                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                                marginTop: '5px',
                                fontWeight: 'bold'
                            }}>{unit}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CountdownTimer;
