import { useState } from 'react'
import '../components/quiz.css'

function Quiz(urlImgQuiz){

    const [pergunta, setPergunta] = useState(pergunatas[0])
    const [escolha, setEscolha] = useState()
    
    function clicou(){
        pass
    }

    return (
        <div className='quiz'>
            <h1>Bem-vindo ao Quiz BTS!</h1>
            <section>
                <p>{pergunta}</p>
                <img src={urlImgQuiz} /><br />
                <button onClick={clicou}>{alternativas[0]}</button>
                <button onClick={clicou}>{alternativas[1]}</button>
                <button onClick={clicou}>{alternativas[2]}</button>
            </section>
        </div>
    )
}

export default Quiz