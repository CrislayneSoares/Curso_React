import { useState } from 'react'
import '../components/quiz.css'

function Quiz(urlImgQuiz){

    const pergunatas = ["Em que ano o BTS debutou?", "Qual o nome do fandom do BTS?" , 3 , 4, 5]
    const respostas = ["13/06/2013", "Army"]
    const alternativas = ["15/05/2014", "13/06/2013", "12/03/2012", "Bell", "Bomb", "Army"]

    const [pergunta, setPergunta] = useState(pergunatas[0])
    
    function clicou(){
        let c = 0
        while(c = 0){
            if (alternativas[0] == respostas[0]) {
                setPergunta(pergunatas[1])
                c = 1
                break
            }
            if (alternativas[1] == respostas[0]) {
                setPergunta(pergunatas[1])
                c = 1
                break
            }
            if (alternativas[2] == respostas[0]) {
                setPergunta(pergunatas[1])
                c = 1
                break
            }
        }
        
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