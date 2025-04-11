import CardGridProjects from "../components/CardColProjects";

function Projects() {
    
    return (
        <>
            <section className="min-h-screen bg-terracota text-white pt-12">
                <header className=" flex items-center justify-center font-display font-bold py-12 mt-14 mx-4 sm:mx-auto">
                    <h1 className="text-9xl text-center font-medium h-1/2 w-full">My Projects</h1>
                </header>

                <CardGridProjects />
            </section>
        </>
    )
}
export default Projects;
