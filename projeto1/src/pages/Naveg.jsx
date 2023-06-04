import '../components/naveg.css'
function Naveg(){
    return (
        <header>
            <figure>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-bts-3464283-2903930.png" alt="Logo do bts" />
            </figure>
            <h1>Bangtan Sonyondan</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/membros">Membros</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Naveg