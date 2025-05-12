import { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import axios, { AxiosResponse, AxiosError } from 'axios';


/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Page for users to send a message to Nyx.
   * 
   * Contains a form with name, email, and message fields.
   * When the form is submitted, the form data is sent to the server.
   * If the response is successful, the user is redirected to the Thank You page.
   * If the response is an error, an error message is displayed.
   * 
   * @returns The Contact page component.
   */
function Contact(){
  const navigate = useNavigate();
  const [contact, setContact] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  );
  //Status of while message is being sent
  const [status, setStatus] = useState('Send Message');

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContact({...contact, [event.target.name]: event.target.value});
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Sending...');

    axios.post('http://localhost:5005/contact', contact)
    .then((res: AxiosResponse<{message: string}>) => {
      console.log(res.data.message);
      setContact({
        name: '',
        email: '',
        message: '',
      });
      setStatus('Send Message');
      navigate('/thankyou');
    })
    .catch((err: AxiosError<{error: string}>) => {
      console.error(err.response?.data.error || "Something went wrong.");
      alert("Failed to send message. Please try again.");
    });
  }

  return(
    <div className="min-h-screen bg-terracotaLight text-white px-16 py-6">
      <header className=" flex items-center justify-center font-display py-12 mt-14 mx-4 sm:mx-auto">
        <h1 className="text-[10vw] text-center font-medium h-1/2 w-full">Let's connect!</h1>
      </header>

      <div className="w-full flex items-center justify-center gap-8">
        <a href="">LinkedIn</a>
        <a href="">Github</a>
        <a href="">Email</a> 
      </div>

      <form 
        onSubmit={handleSubmit} 
        className="rounded px-12 pt-6 pb-8 mb-4 space-y-4">
        {/* Name Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Jo Doe *"
            className="border-t border-0 focus:outline-none focus:border-burntOrange px-2 py-2 w-full"
            required
            value={contact.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="jodoe@example.com *"
            className="validator border-t border-0 focus:outline-none focus:border-burntOrange px-2 py-2 w-full"
            required
            value={contact.email}
            onChange={handleChange}
          />
          <div className="validator-hint text-dutchWhite hidden">Please enter valid email address.</div>
        </div>
      

        {/* Message Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            placeholder="Hello Nyx, I would like to... *"
            className="border-t border-0 focus:outline-none focus:border-burntOrange px-2 py-2 min-h-32 w-full"
            required
            value={contact.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-wine w-full">{status}</button>
        </div>
        
      </form>

      <div className="flex justify-between items-center text-sm gap-4">
        <div className="flex gap-6">
          <span>{new Date().getFullYear()} &copy; Edition</span>
        </div>
        <div className="flex gap-6">
          <span>Coded by Nyx</span> 
        </div>
      </div>
    </div>
  );
}
export default Contact;