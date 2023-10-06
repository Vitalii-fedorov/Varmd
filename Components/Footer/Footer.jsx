import './Footer.css'

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
            <h1></h1>  
        </div>
    );
}

export default Footer