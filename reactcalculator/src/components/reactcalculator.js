import React, { useState } from 'react'


const Calculator = () => {
   const [NumberOne, setNumberOne] = useState('')
   const [NumberTwo, setNumberTwo] = useState('')
   const [operator, setOperator] = useState('+')
   const [result, setResult] = useState('')
   const [error, setError] = useState('')

   const calculate = () => { 
    setResult('')
    setError('')

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
            <div className="title"> React Calculator</div>
                <input type="text" name="search" value={NumberOne} onChange={event =>
                setNumberOne(event.target.value)} />
                <select id="operator" value={operator} onChange={event =>
                setOperator(event.target.value)} >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="/">/</option>
                    <option value="*">*</option>
                </select>
                <input type="text" name="serach" value={NumberTwo} onChange={event =>
                setNumberTwo(event.target.value)} />
                <input type="button" value="=" onClick={calculate} />
                <input value={result} disabled /> 
        </div>
    )
}

export default Calculator;