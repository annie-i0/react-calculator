import React, { useState } from 'react'


const Calculator = () => {
   const [NumberOne, setNumberOne] = useState('')
   const [NumberTwo, setNumberTwo] = useState('')
   const [operator, setOperator] = useState('add')
   const [result, setResult] = useState('')
   const [error, setError] = useState('')

   const calculate = () => { 
    setResult('')
    setError('')

    const aValidNumber = () => {
        if (!isNaN(NumberOne) || NumberOne !== undefined || NumberOne !== '') {
          return true
        }
      
        return setError('Please provide a valid number for both operands')
      }


    switch (operator) {
        case 'add':
            return setResult(Number(NumberOne) + Number(NumberTwo))
        case 'sub':
            return setResult(Number(NumberOne) - Number(NumberTwo))
        case 'div':
            return setResult(Number(NumberOne) / Number(NumberTwo))
        case 'mul':
            return setResult(Number(NumberOne) * Number(NumberTwo))
        default:
            return setError('Please provide a valid number for both operands')                
    }
}
    return (
        <div>
            <div className="calculator"> 
                <h1 className="title">React Calculator</h1>
                <input type="text" name="search" value={NumberOne} onChange={event =>
                setNumberOne(event.target.value)} />
                <select id="operator" value={operator} onChange={event =>
                setOperator(event.target.value)} >
                    <option value="add">+</option>
                    <option value="sub">-</option>
                    <option value="div">/</option>
                    <option value="mul">*</option>
                </select>
                <input type="text" name="serach" value={NumberTwo} onChange={event =>
                setNumberTwo(event.target.value)} />
                <input type="button" value="=" onClick={calculate} />
                <input type="text" className="display" value={result} disabled />
                <div className="error">{error ? `${error}`: null}</div> 
            </div>
        </div>    
       
    )
    
}

 export default Calculator;