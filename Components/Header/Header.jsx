import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div className="bgTop">
                <div className="container">
                    <div className="topBar">
                        <div className="infoBar">
                            <img className='locationImg' src="/map.svg" alt='map'/>
                            <h1 className='locationText'> Morbi, India</h1>
                            <img className='calImg' src="/cal.svg" alt="cal" />
                            <h2 className='locationText'> 6 Days a week</h2>
                        </div>
                        <div className="mailBar">
                            <img src="/mail.svg" alt="mail" />
                            <h1 className='mailText'> info@varmd.com</h1>
                        </div>
                    </div>
                </div>
            </div>    

            <div className="navBar">
                    <div className="container">
                        <div className="flex">
                            <div className="flexLogo">
                                <a href='#' className="logo">Varmd</a>
                                <p className="logoText">Uncomplicated & Transparent</p>
                            </div>
                            <nav className="headerMenu">
                                <ul className="menuList">
                                    <li className="menuItem"><a href="#" className="menu_link">Home</a></li>
                                    <li className="menuItem"><a href="#" className="menu_link">About US</a></li>
                                    <li className="menuItem"><a href="#" className="menu_link">Products</a></li>
                                    <li className="menuItem"><a href="#" className="menu_link">Services</a></li>
                                    <li className="menuItem"><a href="#" className="menu_link">Contact Us</a></li>
                                </ul>
                            </nav> 
                        </div>    
                    </div>
               
            </div>
        </div>
    );
}

export default Header