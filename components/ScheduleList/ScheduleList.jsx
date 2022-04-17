import React from 'react'

const DAYS_OF_THE_WEEK = {
    0: 'Lunes',
    1: 'Martes',
    2: 'Miercoles',
    3: 'Jueves',
    4: 'Viernes',
    5: 'Sabado',
    6: 'Domingo'
}

const getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? ' PM' : ' AM';
    var minutes = fourDigitTime.substring(2);

    return hours + ':' + minutes + amPm;
};

export default function ScheduleList({schedule}) {
  return (
    <div className='schedule-container'>
        <ol>
        {
            schedule.map((item, index)=> {
                return(
                    <li key={index}>
                        <div className='schedule-container--content'>
                            <h4>{DAYS_OF_THE_WEEK[item.day]}:</h4> 
                            <p>{getFormattedTime(item.start)} - {getFormattedTime(item.end)}</p>
                        </div>
                    </li>
                )
            })
        }
        </ol>
    </div>
  )
}
