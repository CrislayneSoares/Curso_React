import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Wellcome.css"
import teste from "../assets/teste.svg"

export default function Wellcome(){
    const Wellcome = () => {
        const [quizState, dispatch] = useContext(QuizContext)
    }

    return (
        <section className="wellcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <img src={teste} /><br />
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        </section>
    )
}