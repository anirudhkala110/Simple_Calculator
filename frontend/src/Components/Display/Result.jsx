import React, { useState } from 'react'
import './Result.css'
function Result(props) {
    // const [num1, setnum1] = useState(12)
    // const [num2, setnum2] = useState(22)
    const [opr, setOpr] = useState("+")
    const [result, setResult] = useState(12)
    return (
        <div>
            <div className='container py-1 mt-4 mb-2  bg-info text-dark' style={{ width: "96%", borderTopLeftRadius:"30px",borderTopRightRadius:"30px" }}>
                <button className='d-flex w-100 align-items-center mb-1 btn fw-bolder justify-content-end fs-5'> {props?.num1}</button>
                <button className='d-flex w-100 align-items-center mb-1 btn fw-bolder justify-content-end fs-5'> <strong>{props?.operator} </strong> &nbsp;&nbsp;&nbsp;{props?.num2}</button>
                <hr className="hrStyle" />
                <button className='d-flex w-100 align-items-center btn fw-bolder justify-content-end fs-5'>{props?.res} </button>
            </div>
        </div>
    )
}

export default Result