function Projects(){
    return(
        <section className="min-h-screen bg-gray-100 scroll-mt-20 pt-12">
        <header className=" flex items-center justify-center py-10">
            <h1 className="text-3xl">Projects</h1>
        </header>
        <div className="w-full flex items-center justify-center mx-4 sm:mx-auto">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h4>project 1</h4>
                    

                    <div className="flip-card group w-full h-auto relative">
                        <div className="flip-inner w-full h-full transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d overflow:hidden object-contain">
                    
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-white">
                                <img
                                    className="w-full h-full object-contain"
                                    src="livablestreetslogo.png"
                                    alt="Livable Streets Alliance logo"
                                />
                                
                            </div>

                            {/* Back Side */}
                            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white p-6 flex flex-col justify-center items-center text-center">
                                <p className="mb-2 text-sm text-gray-700">
                                    Data analysis of displacement trends and correlations such as __,__,__ using machine learning pipeline workflow for the client LivableStreets Alliance. 
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-500 hover:underline font-medium"
                                >
                                    Explore More →
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div>project 2</div>
                <div>project 3</div>
                <div>project 4</div>

            </div>
        </div>
        </section>
    );
}
export default Projects;