function Contact(){
  return(
    <section className="min-h-screen bg-terracotaLight text-white px-16 py-6">
      <header className=" flex items-center justify-center font-display font-bold py-12 mt-14 mx-4 sm:mx-auto">
        <h1 className="text-9xl text-center font-medium h-1/2 w-full">Let's connect!</h1>
      </header>

      <div className="w-full flex items-center justify-center gap-8">
        <a href="">LinkedIn</a>
        <a href="">Github</a>
        <a href="">Email</a> 
      </div>

            {/* input contact form */}
            {/* please see dqaisyUI/w3 if you want to add SVG! */}
            {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label className="input block text-gray-700 text-sm mb-2">
                    <input type="text" placeholder="Name" required/> 
                </label>
            
                
                <label className="input validator block text-gray-700 text-sm mb-2">
                    <input type="email" placeholder="Email" required/>
                </label>

                <div className="validator-hint hidden">Please enter valid email address.</div>

                <label className="input block text-gray-700 text-sm p-40 mb-2">
                    <input type="text" placeholder="Message" required/>
                </label>
            </form> */}
      <form className="rounded px-12 pt-6 pb-8 mb-4 space-y-4">
        {/* Name Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Jo Doe *"
            className="border-t border-0 focus:outline-none focus:border-burntOrange px-2 py-2 w-full"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="jodoe@example.com *"
            className="validator border-t border-0 focus:outline-none focus:border-burntOrange px-2 py-2 w-full"
            required
          />
          <div className="validator-hint text-dutchWhite hidden">Please enter valid email address.</div>
        </div>
      

        {/* Message Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            placeholder="Hello Nyx, I would like to... *"
            className="border-t border-0 focus:outline-none focus:border-burntOrange px-2 py-2 min-h-32 w-full"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-wine w-full">Send Message</button>
        </div>
      </form>

      <div className="flex flex-row justify-between items-center  text-sm gap-4">
        <div className="flex gap-6">
          <span>{new Date().getFullYear()} &copy; Edition</span>
        </div>
        <div className="flex gap-6">
          <span>Coded by Nyx</span> 
        </div>
      </div>
    </section>
  );
}
export default Contact;