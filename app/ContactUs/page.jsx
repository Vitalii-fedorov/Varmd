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

                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d649.0213101598232!2d72.50738184264442!3d23.045097060160874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAyJzQyLjQiTiA3MsKwMzAnMjcuNyJF!5e0!3m2!1sru!2sua!4v1696792650688!5m2!1sru!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

                </iframe>

            </div>

        </div>
    );
}

export default ContactUs