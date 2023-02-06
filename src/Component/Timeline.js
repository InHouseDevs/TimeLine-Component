import React, {useEffect, useState} from 'react'
import "./Timeline.css"

const TimeLine = ({statusIndex, timelinePoints}) => {

    const [gradient, setGradient] = useState({
        first: 0, last: 0
    })
    const updateByState = () => {
        if (statusIndex === 0) {
            setGradient({
                first: 11, last: 1
            })

        } else if (statusIndex === 1) {
            setGradient({
                first: 35, last: 66
            })
        } else if (statusIndex === 2) {
            setGradient({
                first: 100, last: 2
            })
        }
    }

    useEffect(() => {
        updateByState();
    }, [statusIndex])

    return (<div id="timeline">
        <div className="line"
             style={{background: `linear-gradient(to right, #5DAC41 ${gradient.first}%, #BFBFBF ${gradient.last}%)`}}>
            {timelinePoints.map((p, i) => {
                return <div key={i} data-mobiletext={p}
                            className={statusIndex >= i ? "year dot complete" : "year dot"}></div>
            })}
        </div>
    </div>)
}

export default TimeLine;
