import React, { useState } from 'react'


const Calculator = () => {
   const [x, setX] = useState('')
   const [operator, setOperator] = useState('')
   const [y, setY] = useState('')
   const [result, setResult] = useState('')

   const calculate = () => { 
    setResult('')

    switch (operator) {
        case 'add':
            return setResult(Number(x) + Number(y))
        case 'sub':
            return setResult(Number(x) - Number(y))
        case 'div':
            return setResult(Number(x) / Number(y))
        case 'mul':
            return setResult(Number(x) * Number(y))
        default:
            return setResult('Please provide a valid number for both operands')                
    }
}
    return (
        <div>
            
        </div>
    )
}

export default Calculator;