"use client"
import "./contactUs.css"
import {GoogleMap, IntoWindowF, MarkerF, useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
    width: "911px",
    height: "613px",
}

const ContactUs = () => {
    return(<div>
            <div className="header-sec">
                Contact Us
            </div>

            <div className="contacts">
            <div className="contacts-bar">
                <div className="topLine">
                    <img src="/dash.png" alt="dash"/>
                    &nbsp;<h5>OUR CONTACTS</h5>
                </div>
                <h1>Get In Touch With Us</h1>
                <h6>We are dedicated to sourcing a variety of ceramic & porcelain tiles & provide Quality Control services to off shore clients from India.</h6>
                <br/>

                <div className="sec-merged-1">
                    <img src="/loc.png" alt="location"/>
                    <div>
                        <span>Head Office</span>
                        <p>
                            Times Square 2, Sindhubhavan
                            <br/> Ahmedabad, Gujarat, india.
                        </p>
                    </div>
                </div>

                <div className="sec-merged-2">
                    <img src="/phone-icon.png" alt="phone"/>
                    <div>
                        <span>Contact-Us</span>
                        <p>
                            T: +91 9106 223226
                            <br/> F: +91 9664 617 220
                        </p>
                    </div>
                </div>

                <div className="sec-merged-3">
                    <img src="/mail-icon.png" alt="Email"/>
                    <div>
                        <span>Email-Us</span>
                        <p>
                            info@varmd.com
                        </p>
                    </div>
                </div>

            </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3757.239310817001!2d72.50756630078341!3d23.04491470381694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5abc78af39%3A0xf52e076225cf1f08!2sTimes%20Square%202%2C%20Thaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sru!2sua!4v1696835859542!5m2!1sru!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className="contactsForm">
                <img src="/example.png" alt="example"/>
                <div className="contactsForm-form">
                    <h2>
                        For any inquiries, questions or commendations. please fill the form :
                    </h2>
                    <br/>
                    <h3>
                        Please feel free to get in touch using the form below. We’d love to hear for you.
                    </h3>

                    <div className="contactsForm-form-fields">

                        <div className="contactsForm-form-fields-info">

                            <div className="contactsForm-form-fields-info-1">
                                <input placeholder="Name" className="contactsForm-form-fields-info-1-nnea">

                                </input>
                                <input placeholder="Number" className="contactsForm-form-fields-info-1-nnea">

                                </input>
                            </div>
                            <div className="contactsForm-form-fields-info-2">
                                <input placeholder="Email" className="contactsForm-form-fields-info-2-nnea">

                                </input>
                                <input placeholder="Address" className="contactsForm-form-fields-info-2-nnea">

                                </input>
                            </div>
                        </div>

                        <textarea placeholder="Message" type="text" className="contactsForm-form-fields-message">

                        </textarea>


                    </div>

                </div>
            </div>

        </div>
    );
}

export default ContactUs