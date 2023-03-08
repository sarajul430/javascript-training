import React from 'react'
import './Calculator.css'

const Calculator =({button})=> {

    const [state, setOutPut] = React.useState("");

    const clickHandler = (e) =>{
        setOutPut(state.concat(e.target.name));
    }

    const clear = () =>{
        setOutPut('');
    }

    const equal = () =>{
        setOutPut(eval(state).toString());
    }
  return (
    <>
        <div className='calculator'>
            <from>
                <input type='text' value={state} />
                <hr />
            </from>

            <div className='calculator-button'>

                <button id='clear' onClick={clear}>c</button>
                <button onClick={clickHandler}>()</button>
                <button name='%' onClick={clickHandler}>%</button>
                <button name='/' onClick={clickHandler}>/</button>
                <button name='7' onClick={clickHandler}>7</button>
                <button name='8' onClick={clickHandler}>8</button>
                <button name='9' onClick={clickHandler}>9</button>
                <button name='*' onClick={clickHandler}>*</button>
                <button name='4' onClick={clickHandler}>4</button>
                <button name='5' onClick={clickHandler}>5</button>
                <button name='6' onClick={clickHandler}>6</button>
                <button name='-' onClick={clickHandler}>-</button>
                <button name='1' onClick={clickHandler}>1</button>
                <button name='2' onClick={clickHandler}>2</button>
                <button name='3' onClick={clickHandler}>3</button>
                <button name='+' onClick={clickHandler}>+</button>
                <button name='+/-' onClick={clickHandler}>+/-</button>
                <button name='0' onClick={clickHandler}>0</button>
                <button name='.' onClick={clickHandler}>.</button>
                <button className='equalto' onClick={equal}>=</button>

            </div>
        </div>
    </>
  );
}

export default Calculator