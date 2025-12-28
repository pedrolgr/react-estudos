import { useState } from "react"

export function App2() {

    const [state, setState] = useState(0)

    function handleClickPlus() {
        setState(state+1);
    }

    function handleClickMinus() {
        if(state-1 < 0) {
            return setState(state)
        } else {
            setState(state-1);
        }
        
    }

    return(
        <>
            <h1>{state}</h1>
            <button onClick={handleClickPlus}>+</button>
            <button onClick={handleClickMinus}>-</button>
        </>
    )
}