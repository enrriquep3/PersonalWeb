import React from "react";
import Hero from '../components/Hero';
import ContactUs from '../components/ContactUs';
import "./styles.css";


function ContactPage(props) {

  const email = "enrriquep3@gmail.com"
  return (
    <div>
      <Hero title={props.title} />
     <ContactUs />
     <div className="or">
     <h2>OR</h2>
     <h5 > <a href={`mailto:${email}`}>emailMe</a></h5>
     </div>
    </div>
  );
}

export default ContactPage;
