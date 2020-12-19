import emailjs from "emailjs-com";
import React from 'react';
import{ init } from 'emailjs-com';



init("user_8rpFuvpafM3yJqZp9ks3o");
export default function ContactUs() {

    

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_djyzh44', 'template_4w4n5e4', e.target, 'user_8rpFuvpafM3yJqZp9ks3o')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
      
        
    }


    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail} >
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Write here your message and I will get back to you." name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info"  value="Send Message"></input>
                        </div>
                    </div>
                </form>
                
            </div>
            
        </div>
        
    )
}