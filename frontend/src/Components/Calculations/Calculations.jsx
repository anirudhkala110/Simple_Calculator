import React, { useState } from 'react'
import './Calculations.css'
import Result from '../Display/Result'
const Calculations = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setnum2] = useState(0)
  const [res, setRes] = useState(0)
  const [opr, setOpr] = useState(false)
  const [operator, setOperator] = useState("---")
  function numberCliked(number) {
    if (!opr) {
      setNum1(num1 * 10 + number)
      // alert(num1)
    }
    if (opr) {
      setnum2(num2 * 10 + number)
    }
  }

  function handleBack() {
    if (!opr) {
      setNum1(parseInt(num1 / 10) )
      // alert(num1)
    }
    if (opr) {
      setnum2(parseInt(num2 / 10))
    }
  }

  function handleOpr(oprator) {
    setOperator(oprator)
    setOpr(true)
    if(operator === "BS"){
      
    }
  }

  function handleResult() {
    if (operator === '+') {
      setRes(num1 + num2)
    }
    if (operator === '-') {
      setRes(num1 - num2)
    }
    if (operator === '*') {
      setRes(num1 * num2)
    }
    if (operator === '/') {
      if (num2 === 0) {
        setRes('Infinite')
      }
      else {
        setRes(num1 / num2)
      }
    }
    if (operator === '%') {
      setRes(num1 % num2)
    }
  }
function handleClear() {
  setOpr(false)
  setNum1(0)
  setnum2(0)
  setRes(0)
  setOperator("--")
}
  return (
    <div className='' style={{ minWiddiv: "350px", minHeight: "500px" }}>
      <div className="result" style={{minHeight:"180px"}}><Result num1={num1} num2={num2} res={res} operator={operator}/></div>
      <div className='container'>
        <div className='justify-content-center rounded rounded-3' >
          <div className='py-2 numberpad' style={{ background: "white" }}>
            {/* <div className="container w-75"> */}
            <div className='m-2 btns d-flex rounded rounded-3 justify-content-between'>
              <button className="btn-danger fs-3 fw-bold shadow btn m-1 text-center border  rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => handleClear()}><strong>C</strong></button>
              <button className="btn-warning fs-3 fw-bold shadow btn m-1 text-center border  rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => handleBack()}><strong>BS</strong></button>
              <button className="btn-success fs-3 fw-bold shadow btn m-1 text-center border  rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => handleOpr("%")}><strong>%</strong></button>
              <button className="btn-success fs-3 fw-bold shadow btn m-1 text-center border  rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => handleOpr("*")}><strong>&times;</strong></button>
            </div>
            <div className='m-2 btns d-flex rounded rounded-3 justify-content-between'>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(1)}><strong>1</strong></button>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(2)}><strong>2</strong></button>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(3)}><strong>3</strong></button>
              <button className="btn-success fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => handleOpr("/")}><strong><i>/</i></strong></button>
            </div>
            <div className='m-2 btns d-flex rounded rounded-3 justify-content-between'>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(4)}><strong>4</strong></button>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(5)}><strong>5</strong></button>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(6)}><strong>6</strong></button>
              <button className="btn-success fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => handleOpr("+")}><strong>+</strong></button>
            </div>
            <div className='m-2 btns d-flex rounded rounded-3 justify-content-between'>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(7)}><strong>7</strong></button>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(8)}><strong>8</strong></button>
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(9)}><strong>9</strong></button>
              <button className="btn-success fs-3 fw-bold shadow py-3 btn m-1 text-center border rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => handleOpr("-")}><strong>-</strong></button>
            </div>
            <div className='m-2 btns d-flex rounded rounded-3 justify-content-between'>
              {/* <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border w-25 rounded rounded-circle" onClick={e => numberCliked()}><strong>00</strong></button> */}
              <button className="btn-primary fs-3 fw-bold shadow py-3 btn m-1 text-center border  rounded rounded-circle" style={{width:"70px",height:"70px"}} onClick={e => numberCliked(0)}><strong>0</strong></button>
              <button className="btn-warning fs-3 fw-bold shadow py-3 btn m-1 text-center border w-75 rounded rounded-4" onClick={handleResult}><strong>=</strong></button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculations