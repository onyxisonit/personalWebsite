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
                                src="data:image/png;base64,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"
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
                                className="w-full h-full object-contain"
                                src=""
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