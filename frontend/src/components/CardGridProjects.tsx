function CardGridProjects() {
    const projects = [
        {
            title: "LivableStreets: Bike Infrastructure",
            img: "/livablestreetslogo.png",
            alt: "Livable Streets Alliance logo",
            link: "https://github.com/BU-Spark/ds-livable-streets-infra/tree/team-c-final",
            desc: (
                <>
                    is an extensive <b>data analysis pipeline</b> to investigate key drivers of
                    <b> displacement trends </b> in Greater Boston for{" "}
                    <a
                        href="https://www.livablestreets.info"
                        target="_blank"
                        className="hover:underline font-medium"
                    >
                        LivableStreets Alliance
                    </a>. <br />
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
                    is a <b>mobile wellness app</b> built in <b>Kotlin</b> that helps users track their mood, journal, and
                    relax through a <b>Figma-designed interface</b>.
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
                    is a <b>CLI expense tracker</b> written in <b>C++</b> using object-oriented principles, file I/O,
                    custom data structures, and STL containers.
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
                    is a <b>nutrition web app</b> using <b>React</b> and <b>Flask</b> that lets users search nutritional info,
                    generate recipes from ingredients, and save favorites.
                </>
            ),
        },
    ];

    return (
        <section>
           
            <div className="w-full px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-4">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group w-full aspect-[3/4] bg-white relative overflow-hidden shadow-md"
                        >
                            <div className="transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d w-full h-full relative">

                                {/* Front Side*/}
                                <div className="absolute inset-0 backface-hidden p-4 flex flex-col items-center justify-center">
                                   
                                    <img
                                        src={project.img}
                                        alt={project.alt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white p-4 flex flex-col justify-center items-center text-center overflow-auto">
                                    <h4 className="font-bold text-base mb-2">{project.title}</h4>
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
