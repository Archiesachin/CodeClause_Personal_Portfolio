import { useState } from "react"
import { useRef } from "react"


export default function Contact(props){


  return(
    <main className={props.darkMode? "darkMode": "main"} id="contact">
      <div className="contact-box">
        <h2 className="contact-title">CONTACT <span className="contact-color">ME.</span></h2>
        <div className="contact-container">
          <section className="conatct-details">
            <div className="contact-1">
            <h2>Don't be Shy!</h2>
            <p>Feel free to get in touch with me. I am always open to discussing new projects,creative ideas or opportunites.</p>
            <div className="contact-info">
            <img src={`/images/email.png`}/>
            <div className="contact-info-1">
            <h3>Mail me</h3>
            <h3>archieshah8767@gmail.com</h3>
            </div>
            </div>
            <div className="contact-info">
            <img src={`/images/call.png`}/>
            <div  className="contact-info-1">
            <h3>Call me</h3>
            <h3>+91 8767222341</h3>
            </div>
            </div>
            <div className="socials">
            <a  href="https://www.linkedin.com/in/archie-shah-22b35124a/">
            <img src={`/images/linkedin.png`}></img>
            </a>
            <a href="https://github.com/Archiesachin">
            <img src={`/images/github.png`}></img>
            </a>
            <a href="https://www.instagram.com/archie.shah_/">
            <img src={`/images/instagram-purple.png`} ></img>
            </a>
            <a href="https://www.youtube.com/channel/UC6SXq1UpxNPx59G5oCWY00g">
            <img src={`/images/youtube-purple.png`} ></img>
            </a>

          </div>
            </div>
          </section>

        <form  className="contact-form" >
          <div className="form-control">
          <input type="text" placeholder="Name" name="name" className="first-row" required/>

          <input type="text" placeholder="Email/Phone number" name="email" 
           className="first-row" required/>

          </div>
          <input type="text" placeholder="Your Message" name="message"  className="contact-message" required/>
          <div className="submit">
          <button type="submit">Send Message</button>
          </div>
          
          

        </form>


        </div>

      </div>

    </main>
  )
  
}