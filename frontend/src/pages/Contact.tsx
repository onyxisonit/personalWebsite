function Contact(){
    return(
        <section className="min-h-screen bg-gray-100 scroll-mt-20 pt-12">
        <header className=" flex items-center justify-center py-10">
            <h1 className="text-3xl">Contact</h1>
        </header>
        <div className="w-full flex items-center justify-center mx-4 sm:mx-auto">
           <a href="">LinkedIn</a>
           <a href="">Github</a>
           <a href="">Email</a> 
           {/* figure out how to get email copied to clipboard AND/OR jump to contact form below */}
        </div>

        {/* input contact form */}
        {/* please see dqaisyUI/w3 if you want to add SVG! */}
        <div>
            <label className="input">
                <input type="text" placeholder="Name" required/> 
            </label>
            
            <label className="input validator">
                <input type="email" placeholder="Email" required/>
            </label>

            <div className="validator-hint hidden">Please enter valid email address.</div>

            <label className="input">
                <input type="text" placeholder="Message" required/>
            </label>
        </div>
        </section>
    );
}
export default Contact;