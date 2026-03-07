import {useState} from 'react';
import CounterButton from './CounterButton';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    const handleReset = () => {
        setCount(0);
    }

    const handleDouble = () => {
        setCount(prevCount => prevCount * 2);
    }

    const handleChangeBy = (amount) => {
        setCount(prevCount => prevCount+amount);
    }

    const createChangeHandler = (amount) => {
        return () => {
            setCount(prevCount => prevCount + amount);
        }
    }

    return (
        <div style={{textAlign:'center'}}>
           
            <div style={{fontSize:'2rem', color: count < 0 ? 'red' : 'green'}}>
                <h3 style={{margin:0}}> Counter: {count} </h3>
            </div>

            <div style={{margin:'20px'}}>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                    <CounterButton onButtonClick = {handleIncrement} color="green"> +1 </CounterButton>
                    <CounterButton onButtonClick = {createChangeHandler(5)} color="blue"> +5</CounterButton>
                    <CounterButton onButtonClick = {createChangeHandler(10)} color="skyblue" > +10</CounterButton>
                </div>

                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                    <CounterButton onButtonClick = {handleDecrement} color="red"> -1 </CounterButton>
                    <CounterButton onButtonClick = {createChangeHandler(-5)} color="orange" > -5</CounterButton>
                    <CounterButton onButtonClick = {createChangeHandler(-10)} color="brown" > -10</CounterButton>
                </div>  

                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                    <CounterButton onButtonClick = {handleReset} color="grey"> Reset </CounterButton>
                    <CounterButton onButtonClick = {handleDouble} color="purple"> Double </CounterButton>
                </div>


            </div>
        </div>

    );
}

export default Counter;