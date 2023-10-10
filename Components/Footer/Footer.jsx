import './Footer.css'
import Link from "next/link";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footerFlex">
                <div className="footercont">
                    <h1 className="footerLogo">Varmd</h1>
                    <p className="footerTextlogo">Uncomplicated & Transparent</p>
                </div>
                <form action method="post" target='_blank' className="ftMail">
                    <input className='email' name='last_name' type="email" placeholder='Your Email Address'/>
                    <button className='button' type='button'><img src="/sendmail.svg" alt="mail" /></button>
                </form> 
            </div>   
            <div className="footerAbout">
                <div>
                    <div className='width'>
                        <h2 className='about'>About Us</h2>
                        <p className="aboutText">We are dedicated to sourcing a variety of ceramic & porcelain tiles & provide Quality Control services to off shore clients from India.</p>   
                    </div>  
                        <div className="contact">
                        <img src="/phone.svg" alt="phone" />
                        <div className="phoneMargin">
                            <p className="phoneText">T:+91 9106 223 226</p>
                            <p className="phoneText">F:+91 9664 617 220</p>
                        </div>
                    </div>
                </div>


                <div className="quickl">

                    <div className="quicklines">
                        <ul className='quickList'><a className='quickList' href='#'>Quicklist</a>
                            <li className='mt'><Link className="quickText" href={"/Products"}>Marble</Link></li>
                            <li><Link className="quickText" href={"/AboutUs"}>About Us</Link></li>
                            <li><Link className="quickText" href={"/Services"}>Services</Link></li>
                        </ul>
                    </div>
                    <div className="quicklines">
                        <ul className='quickList'><a className='quickList' href='#'>Our Services</a>
                            <li className='mt'><Link className="quickText" href={"/Services"}>Product Sourcing</Link></li>
                            <li><Link className="quickText" href={"/Services/OEMOperation"}>OEM Operation</Link></li>
                            <li><Link className="quickText" href={"/Services/QualityAssurance"}>Quality Assurance</Link></li>
                            <li><Link className="quickText" href={"/Services/FreightForwarding"}>Freight Forwarding</Link></li>
                        </ul>
                    </div>

                </div>






                <div>
                    <div className='width5'>
                        <h2 className='about'>Our Office</h2>
                        <p className="aboutText">Times Square 2, <br></br> Sindhubhavan Ahmedabad, Gujarat, india. </p>   
                    </div>  
                        <div>
                            <a href='#' className="phoneText">Info@Varmd.Com</a>
                        </div>
                </div>
            </div> 
            <div className="copyright">Copyright 2023 Varmd. All Rights Reserved.</div>
        </div>
    );
}

export default Footer