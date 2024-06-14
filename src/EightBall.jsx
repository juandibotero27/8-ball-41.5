import React, {useState} from 'react'
import './EightBall.css'


const EightBall = ({answer}) => {
    const [message, setMessage] = useState('Think of a question')
    const [color, setColor] = useState('black')

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answer.length)
        const {msg, color} = answer[randomIndex]
        setMessage(msg)
        setColor(color)
    }
    return (
        <div className='EightBall' style={{backgroundColor: color}} onClick={handleClick}>
            <div className='EightBall-message'>{message}</div>
        </div>
    )
}

export default EightBall