function CardCarousel(){
    return(
        <div className="carousel carousel-center shadow">
            <div className="carousel-item w-1/2 p-6">
                
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
        
        
            <div className="carousel-item w-1/2">
                <div className="flip-card group w-full h-auto relative">
                    <div className="flip-inner w-full h-full transition-transform duration-500 group-hover:rotate-y-180 transform-style-preserve-3d overflow:hidden object-contain">
                
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
                            <p className="mb-2 text-sm text-gray-700">
                                Mobile application Unwind with features including __,__,__. Designed in Figma, (maybe include link to Figma design)
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

        <div className="carousel-item w-1/2">
            <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger" />
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
    );
}
export default CardCarousel;