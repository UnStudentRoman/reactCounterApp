import { useState } from "react";
import './styles.css'

export default function App() {

    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        return setCounter((currentCounter) => currentCounter + 1 )
    }

    const decreaseCounter = () => {
        return setCounter((currentCounter) => {
            if (currentCounter > 0) {
                return currentCounter - 1
            } else {
                return currentCounter
            }
            
        } )
    }

    return (
        <>
        <div className="main-wrapper">
            <h1>COUNTER</h1>
            <div className="button-wrapper">
            <button type="button" onClick={increaseCounter}>Add</button>
            <button type="button" onClick={decreaseCounter}>Subtract</button>
            </div>
            <p className="counter-value">{counter}</p>
        </div>
        
        </>
    )
}