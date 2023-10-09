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
          <div className="imgs"><img src="/product-sourcing.svg" alt="Product Sourcing" />
            <img src="/product-sourcing.png" alt="Product Sourcing" /></div>
          <h2>Product Sourcing</h2>
          <p>Find trustworthy manufacturers to purchase your desired products ranges from, at a reasonable cost.</p></div>
          <a href="#">Read More &#8594;</a>
        </div>
        <div className="banner">
          <div>
            <div className="imgs"><img src="/oem-operation.svg" alt="OEM Operation" />
              <img src="/oem-operation.png" alt="OEM Operation" /></div>
          <h2>OEM Operation</h2>
          <p>VSource helps you to collaborate with the right manufacturer(s) who could match your OEM demands & parameters in terms of production capacity, capability, quality & pricing.</p></div>
          <a href="#">Read More &#8594;</a>
        </div>
        <div className="banner">
          <div>
          <div className="imgs"><img src="/quality-assurance.svg" alt="Quality Assurance" />
            <img src="/quality-assurance.png" alt="Quality Assurance" /></div>
          <h2>Quality Assurance</h2>
          <p>Stressed over the quality of your tiles while purchasing? Don’t worry, our quality control administrations are here to help you in keeping up with the quality of your brand by really taking a look at your items in the plant as per the acknowledgment quality breaking point (AQL) and giving you a nitty gritty report on regardless of whether this item is produced by your necessity or not.</p></div>
          <a href="#">Read More &#8594;</a>
        </div>
        <div className="banner">
          <div>
            <div className="imgs"><img src="/freight-forwarding.svg" alt="Freight Forwarding" />
              <img src="/freight-forwarding.png" alt="Freight Forwarding" /></div>
          <h2>Freight Forwarding</h2>
          <p>Our experienced team with extremely proficient forwarding services can diminish your supply chain issues & deliver your cargo to all leading ports across the globe in a protected and momentary manner.</p></div>
          <a href="#">Read More &#8594;</a>
        </div>
      </div>
      </div>

      <div className="collection">
        <div className="collection-text">
          <h5>&#8212; Choose Your Tiles</h5>
          <h1>Explore Our Collection</h1>
        </div>
        <div className="collection-bars">
          <div className="collection-bars-row">
            <div className="collection-bar">
              <div className="collection-bar-info">
              <div className="collection-bar-info-wrapper"><h2>INDOOR-PORCELAIN TILES</h2>​
                <h5>Porcelain Tiles suitable for indoor wall & floors with</h5> ​<h4>Water absorption &lt;0.5%</h4> ​​<h5> In various sizes (cm) <br/><br/>30x60, 60x60, 60x120 <br/><br/>80x80, 80x160, 120x120 <br/><br/><br/>Surface options <br/><br/>Polished, Matt, High Gloss, Anti-skid, Carving & Sugar.</h5></div>
              <a href="#">browse collection &#62;</a>
              </div>
            </div>
            <div className="collection-bar">
              <div className="collection-bar-image" style={{backgroundImage: "url('/OUTDOOR_PORCELAIN.png')", backgroundSize: "cover"}}>
              </div>
            </div>
            <div className="collection-bar">
              <div className="collection-bar-info" style={{backgroundImage: "url('/SUBWAYMETROTILES.png')"}}>
              <div className="collection-bar-info-wrapper">
                <h2>SUBWAY / METROTILES</h2>
                <br/><br/>
                <h5>Subway or Metro tiles, with</h5><br/> <h4>Water absorption &lt;15%</h4>  <br/><br/><h5>In various sizes (cm) <br/><br/>10x20, 10x30, 10x40 <br/><br/>7.5x30, 20x20  <br/><br/><br/>Various colors and shapes.</h5>
              </div>
                <a href="#">browse collection &#62;</a>
              </div>
            </div>
          </div>
          <div className="collection-bars-row">
          <div className="collection-bar">
            <div className="collection-bar-image"style={{backgroundImage: "url('/Ceramic_Wall.png')", backgroundSize: "cover"}}>
            </div>
          </div>
          <div className="collection-bar">
            <div className="collection-bar-info" style={{backgroundImage: "url('/WOODFINISHTILES.png')"}}>
            <div className="collection-bar-info-wrapper">
              <h2>WOOD FINISHTILES</h2>
              <br/>​
              <h5>Wood effect</h5><span> (pressed)</span> <br/><br/><h5>porcelain tiles suitable for <br/><br/>indoor walls & floors, with</h5> <br/><h4>Water absorption &lt;0.5%</h4> <br/><br/> <h5>In 2 sizes (cm) <br/><br/>20x120, 30x120  <br/><br/><br/>Surface options <br/><br/>Matt, Textured.</h5>
            </div>
              <a href="#">browse collection &#62;</a>
            </div>
          </div>
          <div className="collection-bar">
            <div className="collection-bar-image" style={{backgroundImage: "url('/mosaics.png')", backgroundSize: "cover"}}>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="process">

        <h1 className="process-text">
          Why Varmd?
        </h1>

        <div className="process-bars">

          <div className="process-bar">
            <img src="/inspect.png" alt="inspected"/>
            <div className="process-bar-text">
              <p><span>Go-to</span> company offering a wide
              range of <span>Quality Assured products.</span></p>
              <br/><br/>
            <p>Choose from a wide range of <span>ceramic
              & porcelain tiles</span> at Varmd & worry
              about nothing else !</p>
              <br/><br/>
            <p>Tiles are sourced from the <span>best
              factories</span> & additionally, <span>Varmd's
              QC team works independently at the
              factory</span> ensuring end to end compliance</p>
              <br/><br/>
            <p>Every production is closely followed &
              <span>each shipment is thoroughly inspected.</span></p>
            </div>
          </div>
          <div className="process-bar">
            <img src="/experience.png" alt="experience"/>
            <div className="process-bar-text">
              <p><span>7+</span> years ofprofessional services,
              <span>fostered by 3 decades</span> of
              experience in the <span>Indian Tile industry.</span></p>
              <br/><br/>
            <p>Established in 2016, Varmd has
              <span>sourced, inspected & exported</span> over</p>
              <br/><br/>
            <p><span>2+ million sq meters</span> for
              distributors and big-box retailers
              in the UK, Spain, Belgium,
              New Zealand, Australia, South Africa,
              and UAE.</p>
            </div>
          </div>
          <div className="process-bar">
            <img src="/support.png" alt="support"/>
            <div className="process-bar-text">
              <p><span>Holding your hands</span> throughout
              <span>the process.</span></p>
              <br/><br/>
            <p>Varmd is well equipped with
              dedicated teams for <span>Quality control,
              Logistics, Designing & After-
              sales support.</span></p>
              <br/><br/>
            <p>Our executives are <span>actively involved
              on the ground adhering strict policies</span>
              & ensuring total outbound compliance
              while our Logistic experts provide
              <span>hassle free documentation</span> and
              forwarding support for each shipment.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}