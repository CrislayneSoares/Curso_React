import Naveg from "./Naveg"
import Footer from "./Footer"
import Cards from "../components/cards"

function Membros(){
    return (
        <div>
            <Naveg/>
            <main>
                <section>
                    <Cards nome="TaeHyung" urlImg={"https://www.nacionrex.com/__export/1596213075257/sites/debate/img/2020/07/31/v-asi-era-en-su-infancia-guarderia_crop1596212718196.jpg_423682103.jpg"}/>
                    <Cards nome="Jimin" urlImg={"https://i.pinimg.com/originals/ed/68/6c/ed686c1f063edab1bef3551270475d4e.jpg"}/>
                    <Cards nome="Jin" urlImg={"https://i.pinimg.com/736x/68/eb/db/68ebdb258489c29e70ab478322a3b1ff.jpg"}/>
                    <Cards nome="Jungkook" urlImg={"https://64.media.tumblr.com/85ee3c903afb0fedd4139a2ed18da8fc/9ad76c1119b23a99-93/s500x750/92d6f8823dcd5a378f75e9e0da1a16b2d4f3ecfe.jpg"}/>
                </section>
                <section>
                    <Cards nome="J-Hope" urlImg={"https://i.pinimg.com/originals/48/f8/7e/48f87e0744aa9a3f1f40e47fe1581eb4.jpg"}/>
                    <Cards nome="Namjoon" urlImg={"https://i.pinimg.com/originals/9c/be/74/9cbe7473cad8f314d9f0414390f7199c.jpg"}/>
                    <Cards nome="Suga" urlImg={"https://i.pinimg.com/736x/ee/4e/b6/ee4eb64233f90adb9f805d4eeb5b5c61.jpg"}/>
                    <Cards nome={"Army"} urlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_VR-emNrRLPedHTXIHOs4lyr1cGD-qWD-9UPw4dCx_niFESCWq-sn2pUENcEcZaA_lI&usqp=CAU"}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Membros