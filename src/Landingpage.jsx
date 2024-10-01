import Navbar from "./Navbar"
import Hero from "./assets/Hero.png"

function Landing(){
    return(
       <div className="bg-[url('./assets/Hero.png')] bg-cover bg-center h-screen w-full">
        <Navbar/>
        <div className="pt-32 pl-10">
            <h1 className="text-white md:w-[685px] md:h-[407px]  text-2xl">“Leadership, Experience, Opportunity.” That’s what makes a Leo. Members of Leo clubs embody the best qualities of our incredible organization. They are devoted young
                 people who realize the power of action. Together, Leos and Lions form a powerful partnership — one of mutual respect where Lions learn from the innovative insights of 
                 Leos, and where Leos gain access to the proven strategies of those who’ve successfully served the world for decades."</h1>
        </div>
        </div>
    )
}

export default Landing