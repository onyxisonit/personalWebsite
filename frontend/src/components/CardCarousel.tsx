function CardCarousel(){
    return(
        <div>
            <header className="flex items-center justify-center font-display font-bold py-10">
                <h1 className="text-3xl">Projects</h1>
            </header>
        

        <div className="carousel carousel-center bg-wine shadow">
            {/* Project 1: LivableStreets: Bike Infrastructure */}
            <div className="carousel-item w-full md:w-1/2 p-4">
                
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
            <div className="carousel-item w-full md:w-1/2 p-4">
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
            <div className="carousel-item w-full md:w-1/2 p-4">
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
        
        
            <div className="carousel-item w-full md:w-1/2 p-4">
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
                                    className="text-terracota hover:underline font-medium"
                                >
                                    Explore More →
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        <div className="carousel-item w-1/2">
            <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger" />
        </div>
        <div className="carousel-item w-1/2">
            <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger" />
        </div>
        <div className="carousel-item">
            <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Burger" />
        </div>
        <div className="carousel-item">
            <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Burger" />
        </div>
      </div>
      </div>
    );
}
export default CardCarousel;