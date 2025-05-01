import CardGridProjects from "../components/CardColProjects";

function Projects() {
    
    return (
        <>
            <section className="min-h-screen pt-12">
                <header className=" flex items-center justify-center font-display py-12 mt-14 mx-4 sm:mx-auto">
                    <h1 className="text-[10vw] text-center font-medium h-1/2 w-full text-wine">My Projects</h1>
                </header>

                <CardGridProjects />
            </section>
        </>
    )
}
export default Projects;
