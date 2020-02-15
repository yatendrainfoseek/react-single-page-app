import React, { Component } from 'react';

class Contact extends Component{

    render(){
        return(
            <div className="container contact-form">

                <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                            Contact
                            </li>
                        </ol>
                </nav>
           
            <form method="post">
             
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtName"
                      className="form-control"
                      placeholder="Your Name *"
                      defaultValue
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtEmail"
                      className="form-control"
                      placeholder="Your Email *"
                      defaultValue
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtPhone"
                      className="form-control"
                      placeholder="Your Phone Number *"
                      defaultValue
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="btnSubmit"
                      className="btnContact"
                      defaultValue="Send Message"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      name="txtMsg"
                      className="form-control"
                      placeholder="Your Message *"
                      style={{ width: "100%", height: 150 }}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          
        );

    }

}

export default Contact;