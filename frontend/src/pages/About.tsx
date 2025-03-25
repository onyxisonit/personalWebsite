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
        </div>
        </section>
    );
}
export default About;