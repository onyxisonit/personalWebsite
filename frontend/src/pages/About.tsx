function About() {
    return(
        <section className="min-h-screen bg-burntOrange text-white scroll-mt-20 pt-12">
        <header className=" flex items-center justify-center font-display font-bold py-12 mt-14 mx-4 sm:mx-auto">
            <h2 className="text-9xl text-center font-medium h-1/2 w-full">Hi, I'm Nyx.</h2>
        </header>
        <div className="w-full flex items-center justify-center font-body ">
            
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
                    <p className="max-w-2xl text-3xl text-right">
                            A software engineer with a passion for creating innovative solutions that build a better world.
                    </p>

                    {/* can add animation here for anchor tags*/}

                    <p className="max-w-2xl text-lg text-right">
                           Over the past few years, I've had the opportunity to work on diverse 
                           <a href="/projects" className="hover:text-plum font-medium"> projects</a> across the full stack where    
                           I've honed my skills in web development, data analysis, and machine learning.
                    </p>
                    {/* <ul className="list-disc">
                        <li>I worked with LivableStreets Alliance to analyze transit equity in Suffolk County using Python, pandas, and machine learning—combining civic tech with data storytelling.</li>
                        <li>I built Unwind, a Kotlin-based meditation app integrating APIs like Spotify and OpenAI for personalized wellness experiences.</li>
                        <li>I engineered Foodlib, a full-stack web platform using Flask, MongoDB, React, and Google OAuth, enabling users to explore and track nutrition data with improved input accuracy.</li>
                    </ul> */}

                    {/* can add afor designing front end*/}
                    <p className="max-w-2xl text-lg text-right">
                        I’ve developed in a wide range of environments, from CLI UNIX-based systems to Android mobile apps, 
                        and across languages like Python, Jave, Kotlin, HTML/CSS, and Javascript. 
                        I enjoy developing scalable APIs, wrangling databases (SQL & NoSQL), 
                        and designing frontends with React and TypeScript.
                        I’m always excited to adopt new tools and technologies! Recently, I have been self-teaching C++, cloud workflows, and containerization.
                    </p>

                    <p className="max-w-2xl text-lg text-right">
                        I'm looking for opportunities where I can contribute to innovative products, grow alongside great teammates, and make tech more inclusive and impactful.
                    </p>

                    <p className="max-w-2xl text-lg text-right">
                        Let's build something thoughtful <a href="/contact" className="hover:text-plum font-medium">together</a>!
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