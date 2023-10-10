import './Header.css'
import Link from "next/link";

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
                        <div className="flex4">
                            <div className="flexLogo">
                                <Link href={'/'} className="logo">Varmd</Link>
                                <p className="logoText">Uncomplicated & Transparent</p>
                            </div>





                            <nav className="headerMenu">
                                <ul className="menuList">
                                    <li className="menuItem"><Link href={"/"} className="menu_link">Home</Link></li>
                                    <li className="menuItem"><Link href={"/AboutUs"} className="menu_link">About Us</Link></li>
                                    <li className="menuItem"><Link href={"/Products"} className="menu_link">Products</Link></li>
                                    <li className="menuItem"><Link href={"/Services"} className="menu_link">Services</Link></li>
                                    <li className="menuItem"><Link href={"/ContactUs"} className="menu_link">Contact Us</Link></li>
                                </ul>
                            </nav>



                            <div className="hamburger-menu headerMenu ">
                                <input id="menu__toggle" type="checkbox" />
                                <label className="menu__btn" htmlFor="menu__toggle">
                                    <span></span>
                                </label>
                                <ul className="menu__box menuList">
                                    <li className="menuItem"><Link href={"/"} className="menu__item">Home</Link></li>
                                    <li className="menuItem"><Link href={"/AboutUs"} className="menu__item">About Us</Link></li>
                                    <li className="menuItem"><Link href={"/Products"} className="menu__item">Products</Link></li>
                                    <li className="menuItem"><Link href={"/Services"} className="menu__item">Services</Link></li>
                                    <li className="menuItem"><Link href={"/ContactUs"} className="menu__item">Contact Us</Link></li>
                                </ul>
                            </div>








                            {/*<div className="hamburger-menu">
                                <input id="menu__toggle" type="checkbox" />
                                <label className="menu__btn" htmlFor="menu__toggle">
                                    <span></span>
                                </label>
                                <ul className="menu__box">
                                    <li><a className="menu__item" href="#">Главная</a></li>
                                    <li><a className="menu__item" href="#">Проекты</a></li>
                                    <li><a className="menu__item" href="#">Команда</a></li>
                                    <li><a class="menu__item" href="#">Блог</a></li>
                                    <li><a class="menu__item" href="#">Контакты</a></li>
                                </ul>
                            </div>*/}




                        </div>    
                    </div>
               
            </div>
        </div>
    );
}

export default Header