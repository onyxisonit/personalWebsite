import { FaLinkedin, FaGithub } from 'react-icons/fa';
function ThankYou() {
    return (
        <div className=" text-darkBrown px-16 py-6">
            <section className="min-h-screen flex flex-col items-center justify-center gap-16">
                <h1 className="text-[8vw] leading-[1.1] text-center font-medium">Thank you <br /> for reaching out!</h1>
                <p className="text-md md:text-lg text-center">I'll get back to you as soon as I can.</p>
            
            
                <div className="flex justify-center items-center gap-4 ">
                    <a
                        href="https://www.linkedin.com/in/onyxisonit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-burntOrange hover:scale-105 hover:text-dutchWhite transition"
                        >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                    href="https://github.com/onyxisonit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-burntOrange hover:scale-105 hover:text-dutchWhite transition"
                    >
                    <FaGithub size={20} />
                    </a>
                </div>
            </section>
            <div className="flex flex-row justify-between items-center text-sm gap-4">
                <div className="flex gap-6">
                    <span>{new Date().getFullYear()} &copy; Edition</span>
                    
                </div>
                <div className="flex gap-6">
                    <span>Coded by Nyx</span> 
                </div>
            </div>
        </div>
    );
}

export default ThankYou;