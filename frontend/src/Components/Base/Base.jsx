import React from 'react'
import './Base.css'
import Result from '../Display/Result'
import Calculations from '../Calculations/Calculations'
const Base = () => {
    return (
        <div>
            <div className="container py-2">
                <div className="calculator"><Calculations /></div>
            </div>
        </div>
    )
}

export default Base