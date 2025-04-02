import CardGridProjects from "../components/CardGridProjects";

function Projects() {
    
    return (
        <>
            <section className="min-h-screen bg-gray-100 scroll-mt-20 pt-12">
                <header className="flex items-center justify-center pt-10">
                    <h1 className="text-3xl font-semibold">Projects</h1>
                </header>

                <p className="max-w-3xl mx-auto text-base/7 text-gray-700 text-center py-10">
                        Welcome to my collection of projects — each one reflects not only what I’ve built, but what I’ve learned.<br></br>
                        From data pipelines and full-stack web apps to mobile development and C++ command-line tools, 
                        I approach every challenge with curiosity and a drive to grow. 
                        Whether it’s picking up a new language, diving into unfamiliar frameworks, or refining my design thinking, 
                        I view every project as an opportunity to stretch my skills and deepen my understanding. <br></br>
                        Enjoy!
                </p>

                <CardGridProjects />
            </section>
        </>
    )
}
export default Projects;
