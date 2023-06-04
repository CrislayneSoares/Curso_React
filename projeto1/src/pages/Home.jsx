import Naveg from "./Naveg"
import Footer from "./Footer"
import Quiz from "../components/Quiz"

function Home() {
    return (
        <div>
            <Naveg/>
            <main>
                <Quiz/>
            </main>
            <Footer/>
        </div>
    )
}

export default Home