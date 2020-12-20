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
     <h3>OR</h3>
     <h6 > <a href={`mailto:${email}`}>EmailMe</a></h6>
     </div>
    </div>
  );
}

export default ContactPage;
