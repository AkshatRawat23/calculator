import { React, useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [result, setResult] = useState("")

    const clickHandler = (event) => {
        setResult(result.concat(event.target.value))
    }

    const clearHandle = () => {
        setResult('')
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error")
        }
    }

    return (

        <div className="calc">
            <input type="text" value={result} className='result' placeholder="0" />
            <input type="button" value='9' onClick={clickHandler} className='btn' />
            <input type="button" value='8' onClick={clickHandler} className='btn' />
            <input type="button" value='7' onClick={clickHandler} className='btn' />
            <input type="button" value='6' onClick={clickHandler} className='btn' />
            <input type="button" value='5' onClick={clickHandler} className='btn' />
            <input type="button" value='4' onClick={clickHandler} className='btn' />
            <input type="button" value='3' onClick={clickHandler} className='btn' />
            <input type="button" value='2' onClick={clickHandler} className='btn' />
            <input type="button" value='1' onClick={clickHandler} className='btn' />
            <input type="button" value='0' onClick={clickHandler} className='btn' />
            <input type="button" value='.' onClick={clickHandler} className='btn' />
            <input type="button" value='+' onClick={clickHandler} className='btn' />
            <input type="button" value='-' onClick={clickHandler} className='btn' />
            <input type="button" value='*' onClick={clickHandler} className='btn' />
            <input type="button" value='/' onClick={clickHandler} className='btn' />
            <input type="button" value='=' className='btn' onClick={calculate} />
            <input type="button" onClick={clearHandle} value='Clear' className='clear' />

        </div>
    )
}

export default Calculator