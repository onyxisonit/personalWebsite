import { useRef } from "react";
function CardCarousel(){
    const projectRefs = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null)
    ];

    const scrollToProject = (index: number) => {
        projectRefs[index].current?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    };

    return(
        <div>
            <div className="carousel carousel-center bg-terracota shadow min-w-full min-h-[400px] overflow-x-auto snap-x snap-mandatory scroll-smooth flex">

                {/* Project 1: LivableStreets: Bike Infrastructure */}
                <div ref={projectRefs[0]} className="carousel-item w-full md:w-1/2 p-4">
                    
                    <div className="flip-card group w-full h-full relative">
                        <div className="flip-inner w-full h-full transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d">
                    
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-white">
                                <img
                                    className="w-full h-full p-4 object-contain object-fit:cover"
                                    src="livablestreetslogo.png"
                                    alt="Livable Streets Alliance logo"
                                />
                                
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-6 flex flex-col justify-center items-center text-center">
                                <section className="text-md leading-7 text-gray-700">
                                    <p className="mb-2">
                                        <b>LivableStreets:Bike Infrastructure </b> <br />
                                        is an extensive <b>data analysis pipeline</b> using <br />
                                        <b> machine learning </b> techniques in <b> Python</b> to investigate <br /> key drivers of<b> displacement trends </b> in 
                                        the Greater Boston for the {" "}
                                        <a
                                            href="https://www.livablestreets.info"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline font-medium"
                                        >
                                            LivableStreets Alliance
                                        </a>. 
                                    </p>

                                    <a
                                        href="/projects"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore My Projects →
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* Project 2: Unwind */}
                <div ref={projectRefs[1]} className="carousel-item w-full md:w-1/2 p-4">
                    <div className="flip-card group w-full h-full relative">
                        <div className="flip-inner w-full h-full transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d ">
                    
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-white">
                                <img
                                    className="w-full h-full p-5 object-contain"
                                    src="unwindlogo.png"
                                    alt="Unwind project"
                                />
                                
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-6 flex flex-col justify-center items-center text-center">
                                <section className="text-md leading-7 text-gray-700">
                                    <p className="mb-2">
                                        <b>Unwind </b> <br />
                                        is a <b>mobile wellness app</b> built in <b>Kotlin</b> <br />
                                        that helps users track their mood, journal, and relax <br />
                                        through a <b>Figma-designed interface</b>.     
                                    </p>

                                    <a
                                        href="/projects"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore My Projects →
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3: C++ Expense Tracker */}
                <div ref={projectRefs[2]} className="carousel-item w-full md:w-1/2 p-4">
                    <div className="flip-card group w-full h-full relative">
                        <div className="flip-inner w-full h-full transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d">
                    
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-white">
                                <img
                                    className="w-full h-full p-9 object-contain object-fit:cover"
                                    src="cpplogo.png"
                                    alt="C++ logo"
                                />
                                
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-6 flex flex-col justify-center items-center text-center">
                                <section className="text-md leading-7 text-gray-700">
                                    <p className="mb-2">
                                    <b>C++ Expense Tracker </b> <br />
                                    is a <b>CLI expense tracker</b> written in <b>C++</b> using <br />
                                    object-oriented principles, file I/O,
                                    custom data structures, and STL containers.
                                    </p>

                                    <a
                                        href="/projects"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore My Projects →
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* Project 4: Foodlib */}
                <div ref={projectRefs[3]} className="carousel-item w-full md:w-1/2 p-4">
                    <div className="flip-card group w-full h-full relative">
                        <div className="flip-inner w-full h-full transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d ">
                    
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-white">
                                <img
                                    className="w-full h-full py-5 object-contain"
                                    src="foodliblogo.png"
                                    alt="Foodlib website project"
                                />
                                
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-6 flex flex-col justify-center items-center text-center">
                                <section className="text-md leading-7 text-gray-700">
                                    <p className="mb-2">
                                        <b>Foodlib </b> <br />
                                        is a <b>nutrition web app</b> using <b>React</b> and <b>Flask</b> that <br />
                                        lets users search nutritional info,
                                        generate recipes from ingredients, and save favorites.
                                    </p>

                                    <a
                                        href="/projects"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore My Projects →
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex w-full justify-center gap-2 py-2">
                <button onClick={() => scrollToProject(0)} className="btn btn-xs">1</button>
                <button onClick={() => scrollToProject(1)} className="btn btn-xs">2</button>
                <button onClick={() => scrollToProject(2)} className="btn btn-xs">3</button>
                <button onClick={() => scrollToProject(3)} className="btn btn-xs">4</button>
            </div>

        </div>
    );
}
export default CardCarousel;