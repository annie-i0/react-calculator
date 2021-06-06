import React, { useState } from 'react'


const Calculator = () => {
   
    setResult('')

    switch (operation) {
        case 'add':
            return setResult(Number(x) + Number(y))
        case 'sub':
            return setResult(Number(x) - Number(y))
        case 'div':
            return setResult(Number(x) / Number(y))
        case 'mul':
            return setResult(Number(x) * Number(y))            
    }
}

export default Calculator;