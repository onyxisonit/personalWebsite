import CardCarouselProjects from "../components/CardCarouselProjects.tsx";

function Home(){
    return(
        <div className="bg-terracotaLight text-white">
            <section className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl">Welcome to My Portfolio</h1>
            </section>
            <div className="py-10">
                <h1 className="flex items-center justify-center font-display font-bold text-3xl">Projects</h1>
    
                <p className="max-w-3xl mx-auto text-base/7 text-center py-10">
                        Welcome to my collection of projects — each one reflects not only 
                        <b> what I’ve built, but what I’ve learned.</b> <br />
                        From data pipelines and full-stack web apps to mobile development and CLIs, 
                        I approach every challenge with 
                        <b> curiosity and a drive to grow</b>. <br />
                        Enjoy!
                </p>
                <CardCarouselProjects />
            </div>
            
        
        </div>
    );
}
export default Home;