import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="topBar">
                    <div className="infoBar">
                        <img className='locationImg' src="/map.svg" alt='map'/>
                        <h1 className='locationText'> Morbi, India</h1>
                    </div>
                    <div className="mailBar">
                    </div>
                </div>
            </div>    

            <div className="navBar">

            </div>

        </div>
    );
}

export default Header