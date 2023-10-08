import "./aboutUs.css"

const AboutUs = () => {
    return(<div>
            <div className="header-sec">
                About Us
            </div>
                <div className="aboutbg">
                    <div className="container mt">
                        <div className="flex">
                            <div className="mainUs">
                                <div className="video">
                                <video className="video-player" controls>
                                    <source src="/cat.mp4"/>
                                </video>
                                </div>
                            </div>
                            <div className="aboutText">
                                <h2 className="mainText">Founded in 2017, Varmd is a family owned small-medium enterprise devoted solely to the Indian Tiles Industries </h2>
                                <p className="subText">We are dedicated to sourcing a verity of ceramic & porcelain tiles & provide Quality Control Services to off shore clients from  India. </p>
                                <img className="aboutPhoto" src="/textphoto.png" alt="photo" />
                                <h3 className="secondText">2+ Million+ sq meters Sourced, Inspected & Shipped.</h3>
                                <p className="thirdText">Established in the year of 2016 Varmd has exported more than a Million square meters in a tenure of 7 years for distributors and big-box retailers based in the UK, EU, New Zealand, Australia South Africa & UAE.
                                </p>
                            </div>
                        </div>
                        <div className="exploreAbout">
                            <h5 className="coreText" >&#8212; Core Value</h5>
                            <h1 className="empText">Empowering Growth with Trust and Teamwork</h1>
                        </div>
                        <div className="empowering">
                            <div className="bannerListAbout">
                                <div className="bannerAbout">
                                    <div>
                                    <h2 className="bannerTitle">Uncomplicated & Transparent Business</h2>
                                    <p className="bannerText">Our approach is uncomplicated and transparent, allowing our team to get the job done quickly and efficiently. <br /> <br />  Our sourcing services range from finding the best suppliers for your needs, to providing a range of other services. <br /> <br /> We are committed to helping you get the most out of your business.</p></div>
                                </div>
                                <div className="bannerAbout">
                                    <div>
                                    <h2 className="bannerTitle">Evaluate the process & Get things done !</h2>
                                    <p className="bannerText">We work on the ground level to ensure a supplier is providing the best quality product. <br /> <br /> We take the guesswork out of sourcing and production, by working closely with the manufacturer to ensure that all products meet the highest standards. <br /> <br /> We provide a comprehensive service that goes beyond just sourcing, as we also work on the production line to make sure that everything is running smoothly.</p></div>
                                </div>
                                <div className="bannerAbout">
                                    <div>
                                    <h2 className="bannerTitle">Independent Scrutinizing &Decision making</h2>
                                    <p className="bannerText">We are proud of our independent approach at factories & our independent scrutiny and decision making. <br /> <br /> Our experienced Sourcing & QC team are dedicated to making sure our clients get the highest quality products at reasonable prices.<br /> <br /> Inspections are conducted benchmarking international quality standards such as ISO, TISI, ANSI, EN, ASTM.</p></div>
                                </div>
                                <div className="bannerAbout">
                                    <div>
                                    <h2 className="bannerTitle">Human-centered Business</h2>
                                    <p className="bannerText">A human-centred business allows us to place people at the centre of our business model. <br /> <br /> Humanizing our business has allowed us to create a deeper, more meaningful connection with our clients, our team and the community we are part of.  
                                    </p>
                                        <ul className="bannerText" >Doing business with humanity in mind includes:
                                            <li className="marker">Meeting the needs of our clients and our team, while working towards a vision or purpose they also feel apart of.</li>
                                            <li className="marker">Making decisions that consider ‘the bigger picture’ and how the consequences of these decisions will affect clients, suppliers, employees and the community in general.</li>
                                            <li className="marker">Speaking to the hearts and minds of people through our products, services, actions and business values.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img className="certImg" src="/certificate.png" alt="certificate" />
                            <div className="certISO">
                                <h2 className="certTitle">ISO 9001:2015</h2>
                                <p className="certText">We are ISO certified and provide a wide range of services that includes quality assurance, supplier audits, product sourcing and product development. Our team is dedicated to help you get the best value for your money and ensure that you get the highest quality products.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs