import { ButtonUI } from './ButtonUI'

export function App1({ title, buttonText }) {
    return (
        <>
            <h1>{title}</h1>
            <ButtonUI buttonText={buttonText} />
        </>
    )
}