import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="bg-darkBrown text-dutchWhite px-16 py-6 space-y-4">

        <section className="flex flex-col lg:flex-row justify-between text-left pt-12 gap-12">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">Let's work together!</h1>
          </div>
        </section>

        <div className="inline-flex items-center justify-center w-full py-8">     
          <div className="h-[1px] bg-white w-[90%]" />
            <button className="bg-terracotaLight text-white rounded-full px-8 py-5 lg:text-lg font-semibold hover:scale-105 hover:bg-burntOrange transition">
              <a href="/contact">Get in touch</a>
            </button>
          <div className="h-[1px] bg-white w-[10%]" />       
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start text-center"> 
          <button className="border text-white rounded-full px-8 py-4 lg:text-lg hover:scale-105 hover:bg-burntOrange transition">
              <a href="mailto:onyxisonit@gmail.com">onyxisonit@gmail.com</a>
          </button>
        </div>
        
        <div className="flex justify-center lg:justify-start items-center gap-4 ">
            <div className="border-2 border-dashed border-dutchWhite px-6 py-2 rounded-l-lg text-center">Socials</div>
              <a
              href="https://www.linkedin.com/in/onyxisonit/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-burntOrange hover:scale-105 transition"
              >
              <FaLinkedin size={20} />
              </a>
          <a
            href="https://github.com/onyxisonit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-burntOrange hover:scale-105 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-8 lg:gap-12 mt-12 ">
          <div className="flex items-center gap-4 md:gap-6">
            <h1 className="font-bold tracking-[.1em] text-[clamp(2.5rem,10vw,10rem)]">Nyx</h1>
            <img 
              src="picture.jpeg" 
              alt="Profile picture of Nyx" 
              className="w-[clamp(4rem,12vw,6rem)] h-[clamp(4rem,12vw,6rem)] rounded-xl object-cover shadow-lg"
            />
          </div>
          <h1 className="font-bold tracking-[.175em] text-[clamp(2.5rem,12vw,10rem)]">Zhao</h1>
        </div>


        <div className="flex flex-row justify-between items-center text-sm gap-4">
          <div className="flex gap-6">
            <span>{new Date().getFullYear()} &copy; Edition</span>
            
          </div>
          <div className="flex gap-6">
            <span>Coded by Nyx</span> 
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;
  