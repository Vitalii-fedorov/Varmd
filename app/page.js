import './page.css'

export default function Home() {
  return (
    <div className="test">
      <div className="tiles">
        <div className="tiles__text">
          <h1 className="tiles__text1">-WELCOME TO VARMD TILES-</h1>
            <p className="tiles__text2">SECURE YOUR TILE SUPPLIES,
             WITH VARMD</p>
            <div className="tiles__text3">
              <ul className='column'>
                <li>Ceramic Tiles</li>
                <li className='mt'>Porcelain Tiles</li>
                <li>Quality Control</li>
                <li className='mt'>Logistic Support</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
