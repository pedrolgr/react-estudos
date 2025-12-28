import { useState } from "react"

export function App3() {

    const [list, setList] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleClick = (input) => {
        setList(prevList => [...prevList, input])
        console.log(list)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleDelete = (item) => {
        const newList = list.filter((word) => item !== word)
        setList(newList);
    }

    return(
        <>
            <input 
            type="text"
            value={inputValue}
            onChange={handleChange}></input>
            <button onClick={() => handleClick(inputValue)}>Click</button>

            <div>
                <h1>Lista</h1>
                {list.map((item) => (
                    <div key={item}>
                        <span>{item}</span>
                        <button onClick={() => handleDelete(item)}>x</button>
                    </div>
                ))}
            </div>
        </>
    )
}