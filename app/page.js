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



      <div className="services">
        <h1>Our Services</h1>
        <div className="bannerList">
        <div className="banner">
        <div>
          <img src="/product-sourcing.svg" alt="Product Sourcing" />
          <h2>Product Sourcing</h2>
          <p>Find trustworthy manufacturers to purchase your desired products ranges from, at a reasonable cost.</p></div>
          <a href="#">Read More &#8594;</a>
        </div>
        <div className="banner">
          <div>
          <img src="/oem-operation.svg" alt="OEM Operation" />
          <h2>OEM Operation</h2>
          <p>VSource helps you to collaborate with the right manufacturer(s) who could match your OEM demands & parameters in terms of production capacity, capability, quality & pricing.</p></div>
          <a href="#">Read More &#8594;</a>
        </div>
        <div className="banner">
          <div>
          <img src="/quality-assurance.svg" alt="Quality Assurance" />
          <h2>Quality Assurance</h2>
          <p>Stressed over the quality of your tiles while purchasing? Don’t worry, our quality control administrations are here to help you in keeping up with the quality of your brand by really taking a look at your items in the plant as per the acknowledgment quality breaking point (AQL) and giving you a nitty gritty report on regardless of whether this item is produced by your necessity or not.</p></div>
          <a href="#">Read More &#8594;</a>
        </div>
        <div className="banner">
          <div>
          <img src="/freight-forwarding.svg" alt="Freight Forwarding" />
          <h2>Freight Forwarding</h2>
          <p>Our experienced team with extremely proficient forwarding services can diminish your supply chain issues & deliver your cargo to all leading ports across the globe in a protected and momentary manner.</p></div>
          <a href="#">Read More &#8594;</a>
        </div>
      </div>
      </div>




    </div>
  );
}