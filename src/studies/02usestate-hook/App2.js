import { useState } from "react"

export function App2() {

    const [state, setState] = useState(0)

    function handleClick() {
        setState(state+1);
    }

    return(
        <>
            <h1>{state}</h1>
            <button onClick={handleClick}>Click</button>
        </>
    )
}