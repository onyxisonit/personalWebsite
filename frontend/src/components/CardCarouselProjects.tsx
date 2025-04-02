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
            <header className="flex items-center justify-center font-display font-bold py-10">
                <h1 className="text-3xl">Projects</h1>
            </header>
        

            <div className="carousel carousel-center bg-wine shadow min-w-full min-h-[400px] overflow-x-auto snap-x snap-mandatory scroll-smooth flex">

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
                                <section className="text-sm text-gray-700">
                                    <p className="mb-2">
                                        <span className="font-bold">LivableStreets:Bike Infrastructure </span>
                                        is an extensive 
                                        <span className="font-bold"> data analysis pipeline </span> 
                                        to investigate key drivers of
                                        <span className="font-bold"> displacement trends </span>
                                        in the Greater Boston area for the nonprofit organization 
                                        <a href="https://www.livablestreets.info" target="_blank" className=" hover:underline font-medium"> LivableStreets Alliance. </a>
                                    </p>

                                    <p className="mb-2">
                                        It uses
                                        <span className="font-bold"> machine learning </span>and 
                                        <span className="font-bold"> geospatial techniques </span>in 
                                        <span className="font-bold"> Python </span>
                                        (including libraries such as
                                        <span className="font-bold">  numpy, pandas, geopandas, sckit-learn, matplotlib,</span> etc.)
                                    </p>
                                    <a
                                        href="https://github.com/BU-Spark/ds-livable-streets-infra/tree/team-c-final"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore More →
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
                                <section className="text-sm text-gray-700">
                                    <p className="mb-2">
                                        <span className="font-bold">Unwind </span>
                                        is a mobile wellness app designed with a focus on mindfulness and relaxation in 
                                        <span className="font-bold"> Kotlin</span>. 
                                    </p>

                                    <p className="mb-2">
                                        It provides a 
                                        <span className="font-bold"> user-friendly interface</span> to help users track their mood, journal their thoughts, and explore relaxation techniques through a 
                                        <span className="font-bold"> clean and intuitive interface</span> designed in 
                                        <span className="font-bold"> Figma</span>.
                                    </p>

                                    <a
                                        href="https://github.com/karlav24/Unwind"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore More →
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
                                <section className="text-sm text-gray-700">
                                    <p className="mb-2">
                                    
                                        In my continuous journey to 
                                        <span className="font-bold"> self-teach C++</span>, I built a
                                        <span className="font-bold"> command-line based expense tracker</span> in C++ from scratch.
                                    </p>


                                    <p className="mb-2">
                                        It enables users to log, categorize, and summarize personal expenses, utilizing 
                                        <span className="font-bold"> object-oriented principles, file I/O with streams for data persistance, custom data structures, and STL containers </span>
                                        to simulate core backend functionalities in a resource-constrained environment.
                                    </p>
                                    <a
                                        href="https://github.com/onyxisonit/ExpenseTrackerCpp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore More →
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
                                <section className="text-sm text-gray-700">
                                    <p className="mb-2">
                                        <span className="font-bold">Foodlib </span>
                                        a full-stack nutrition web application in  
                                        <span className="font-bold"> Python</span> that allows users to
                                        <span className="font-bold"> search for nutritional information</span> on a wide range of food items, 
                                        <span className="font-bold"> generate recipies based on ingredients</span> they have on hand,
                                        <span className="font-bold"> and save their favorite recipes</span> for future reference!
                                    </p>
                                    
                                    <p className="mb-2">
                                        It features
                                        <span className="font-bold"> user authentication via Google, CRUD functionality, and dynamic filtering</span> bootstrapped with
                                        <span className="font-bold"> React</span> for the frontend and
                                        <span className="font-bold"> Python</span> and
                                        <span className="font-bold"> Flask</span>  in the backend.
                                    </p>

                                    <a
                                        href="https://github.com/karlav24/Unwind"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-terracota hover:underline font-medium"
                                    >
                                        Explore More →
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