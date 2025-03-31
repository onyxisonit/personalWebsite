function About() {
    return(
        <section className="min-h-screen bg-burntOrange text-white scroll-mt-20 pt-12">
        <header className=" flex items-center justify-center font-display font-bold py-10">
            <h1 className="text-3xl">About</h1>
        </header>
        <div className="w-full flex items-center justify-center font-body mx-4 sm:mx-auto">
            <p className="max-w-2xl text-center">
                I am a software engineer with a passion for creating innovative solutions.
            </p>
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

        </div>
        </section>
    );
}
export default About;