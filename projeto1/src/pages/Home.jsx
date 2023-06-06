import Naveg from "./Naveg"
import Footer from "./Footer"
import Wellcome from "../components/wellcome"

function Home() {
    return (
        <div>
            <Naveg/>
            <main>
                <h1 className="sobre">Quiz sobre o BTS</h1>
                <Wellcome/>
            </main>
            <Footer/>
        </div>
    )
}

export default Home