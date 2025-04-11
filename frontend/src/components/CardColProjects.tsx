function CardGridProjects() {
    const projects = [
        {
            title: "LivableStreets: Bike Infrastructure",
            img: "/livablestreetslogo.png",
            alt: "Livable Streets Alliance logo",
            link: "https://github.com/BU-Spark/ds-livable-streets-infra/tree/team-c-final",
            desc: (
                <>
                    is an extensive 
                    <b> data analysis pipeline </b> 
                    to investigate key drivers of
                    <b> displacement trends </b>
                    in the Greater Boston area for the nonprofit organization 
                    <a href="https://www.livablestreets.info" target="_blank" className=" hover:underline font-medium"> LivableStreets Alliance. </a>
                    
                    <br />
                    It uses <b>machine learning</b> and <b>geospatial techniques</b> in{" "}
                    <b>Python</b> with libraries like <b>numpy, pandas, geopandas, scikit-learn</b>, and <b>matplotlib</b>.
                </>
            ),
        },
        {
            title: "Unwind",
            img: "/unwindlogo.png",
            alt: "Unwind project",
            link: "https://github.com/karlav24/Unwind",
            desc: (
                <>
                    is a mobile wellness app designed with a focus on mindfulness and relaxation in 
                    <b> Kotlin</b>. <br />
                    It provides a 
                    <b> user-friendly interface</b> to help users track their mood, journal their thoughts, and explore relaxation techniques through a 
                    <b> clean and intuitive interface</b> designed in 
                    <b> Figma</b>.
                </>
            ),
        },
        {
            title: "C++ Expense Tracker",
            img: "/cpplogo.png",
            alt: "C++ logo",
            link: "https://github.com/onyxisonit/ExpenseTrackerCpp",
            desc: (
                <>
                    
                    is a <b> command-line interface based expense tracker</b>.
                    In my continuous journey to 
                    <b> self-teach C++</b>, I built a
                    this CLI application in pure C++ from scratch. <br />
                    It enables users to log, categorize, and summarize personal expenses, utilizing 
                    <b> object-oriented principles, file I/O with streams for data persistance, custom data structures, and STL containers </b>
                    to simulate core backend functionalities in a resource-constrained environment.
                                    
                </>
            ),
        },
        {
            title: "Foodlib",
            img: "/foodliblogo.png",
            alt: "Foodlib website project",
            link: "https://github.com/karlav24/Unwind",
            desc: (
                <>
                    is a full-stack nutrition web application in  
                    <b> Python</b> that allows users to <br />
                    <b> search for nutritional information</b> on a wide range of food items, 
                    <b> generate recipies based on ingredients</b> they have on hand,
                    <b> and save their favorite recipes</b> for future reference! <br />
                    It features
                    <b> user authentication via Google, CRUD functionality, and dynamic filtering</b> bootstrapped with
                    <b> React</b> for the frontend and
                    <b> Python</b> and
                    <b> Flask</b>  in the backend.
                </>
            ),
        },
    ];

    return (
        <section>
           
            <div className="w-full p-16">

                <div className="flex flex-col gap-12">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group w-full h-[500px] bg-white relative overflow-hidden shadow-md"
                        >
                            <div className="transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d w-full h-full relative">

                                {/* Front Side*/}
                                <div className="absolute inset-0 backface-hidden p-4 flex items-center justify-center">
                                   
                                    <img
                                        src={project.img}
                                        alt={project.alt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white p-4 flex flex-col justify-center items-center text-center overflow-auto">
                                    <h4 className="font-bold text-base text-black mb-2">{project.title}</h4>
                                    <p className="text-sm text-gray-700 mb-3">{project.desc}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default CardGridProjects;
