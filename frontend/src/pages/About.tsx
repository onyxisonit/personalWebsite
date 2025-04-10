function About() {
    return(
        <section className="min-h-screen bg-burntOrange text-white scroll-mt-20 pt-12">
        <header className=" flex items-center justify-center font-display font-bold py-10">
            <h1 className="text-3xl">About</h1>
        </header>
        <div className="w-full flex items-center justify-center font-body mx-4 sm:mx-auto">
            <h2 className="text-9xl text-center font-medium h-1/2 w-full">Hi, I'm Nyx.</h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                <div className="flex flex-col gap-10">
                    <div className="relative">
                        <div>
                            <img src="picture.jpeg" alt="Profile picture of Nyx" width="1140" height="1540" className="relative max-w-sm mx-auto h-auto rounded-xl shadow-lg"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <p className="max-w-2xl text-center">
                            I am a software engineer with a passion for creating innovative solutions.
                    </p>
                </div>
            
            </div>
        </div>
        
        
            {/* <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <img src="" alt=""></img>

            <p>
                Outside of work, you can find me:
            </p>
            <ul>
                <li>hiking, in the forest</li>
                <li>studying the stars above, reading about astronomical events</li>
                <li>trying new things, arts and crafts, learning new skills (guitar)</li>
                <li>loving cats</li>
            </ul>

            <img src="" alt="">My beautiful cat.</img> */}

       
        </section>
    );
}
export default About;