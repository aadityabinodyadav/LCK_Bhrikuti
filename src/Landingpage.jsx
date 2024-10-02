import Navbar from "./Navbar";
import lck from "./assets/lck.jpg";

function Landing() {
  return (
    <div className="bg-[url('./assets/Hero.png')] bg-cover bg-center h-screen w-full">
      <Navbar />
      <div className="pt-20 md:pt-32 flex flex-col md:flex-row md:justify-between items-center px-10">
        
           <img
            className="flex md:hidden mx-auto items-center rounded-full w-[150px] h-[150px] mr-24 md:w-[270px] md:h-[270px] object-cover"
            src={lck}
            alt="Leo Club Logo"
          />
          <br /> <br />

        <div className="text-white flex flex-col md:w-[60%]">
          <h1 className="text-sm  md:text-2xl">
            “Leadership, Experience, Opportunity.” That’s what makes a Leo.
            Members of Leo clubs embody the best qualities of our incredible
            organization. They are devoted young people who realize the power of
            action. Together, Leos and Lions form a powerful partnership — one
            of mutual respect where Lions learn from the innovative insights of
            Leos, and where Leos gain access to the proven strategies of those
            who’ve successfully served the world for decades." 
          </h1>
          <br />
          <div className="hidden md:block">
                  <br /> <br /> <br />
                </div>
          <button className="bg-yellonpw-400 w-[30%] ml-[35%] mr-[35%] text-xs md:text-xl text-white bg-yellow-400 hover:bg-yellow-300 active:bg-slate-100 active:text-yellow-300 px-4 py-2 rounded-full">
                    KNOW MORE
                </button>
               
        </div>

        {/* Image Section */}
        <div className="hidden md:block mt-8 md:mt-0 md:ml-8">
          <img
            className="rounded-full w-[150px] h-[150px] mr-24 md:w-[270px] md:h-[270px] object-cover"
            src={lck}
            alt="Leo Club Logo"
          />
        </div>
      </div>
     
    </div>
  );
}

export default Landing;
