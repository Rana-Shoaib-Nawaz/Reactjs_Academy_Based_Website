import React from 'react'
import './ContactForm.css';

export default function ContactForm() {
    
 
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Your Name :
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSezBgnZ58lUGYlwsfa485ougVyzTW2cAfKTmY47w-z4QOwU6g/viewform?usp=sf_link"><input type="text" id='name'/></a> 
                        
                        
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="Email">Your Email :
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSezBgnZ58lUGYlwsfa485ougVyzTW2cAfKTmY47w-z4QOwU6g/viewform?usp=sf_link"><input type="text" /></a> 
                       
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Your Message
                        <textarea type="text" id='message' name='message'  />
                    </label>
                </div>
                <button> <a href="https://docs.google.com/forms/d/e/1FAIpQLSezBgnZ58lUGYlwsfa485ougVyzTW2cAfKTmY47w-z4QOwU6g/viewform?usp=sf_link">Send</a> </button>
                
            </form>
        </div>
    )
}
