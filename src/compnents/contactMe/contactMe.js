import React, { Component } from 'react';
import './contactMe.css'

class Contact extends Component 
{
    render()
    {
        return(
        <div className="mainbody">
        <h2 className="headers">Questions, Comments, or Concerns?</h2>
        <h3 className="headers">Feel free to send me a message on how I can improve the site!</h3>
          <form action="https://formspree.io/`MTroyer95@att.net`" method="POST">
                <div className="wrap">
                    <div className="info">
                      <label>Name:</label>
                      <input type="text" placeholder="Your Name"/>
                  </div>
                  <div>
                    <div className="info">
                      <label>Email Address:</label>
                      <input placeholder="Your Email"/>
                  </div>
                  <div className="info">
                      <label>Comments:</label>
                    <div class="form-group">
                      <textarea
                        className="form"
                        rows="7"
                        placeholder="Your Message"
                        id="message"
                        required
                        data-validation-required-message="Please leave a message"
                        name="message">
                        </textarea>
                  </div>
                  </div>
                  <div>
                    <div></div>
                    <button className="info" type="submit">
                      <i aria-hidden="true"></i>
                      Send Message
                    </button>
                  </div>
                </div>
                </div>
                </form>
        </div>
       )}
}

export default Contact;