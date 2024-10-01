import Navbar from "./Navbar"
import Hero from "./assets/Hero.png"

function Landing(){
    return(
       <div className="bg-[url('./assets/Hero.png')] bg-cover bg-center h-screen w-full">
        <Navbar/>
        </div>
    )
}

export default Landing