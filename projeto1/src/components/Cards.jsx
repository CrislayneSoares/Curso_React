import '../components/Cards.css'

function Cards({nome, urlImg}){
    return (
        <div>
            <figure>
                <img src={urlImg} alt={nome} />
                <figcaption>{nome}</figcaption>
            </figure>
        </div>
    )
}

export default Cards