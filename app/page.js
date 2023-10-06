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
        <div className="banner">
          <img src="/product-sourcing.svg" alt="Product Sourcing" />
          <h2>Product Sourcing</h2>
          <p>Поиск и закупка товаров от производителей</p>
          Подробнее
        </div>
        <div className="banner">
          <img src="/oem-operation.svg" alt="OEM Operation" />
          <h2>OEM Operation</h2>
          <p>Разработка и производство продукции по OEM-заказам</p>
          Подробнее
        </div>
        <div className="banner">
          <img src="/quality-assurance.svg" alt="Quality Assurance" />
          <h2>Quality Assurance</h2>
          <p>Контроль качества продукции</p>
          Подробнее
        </div>
        <div className="banner">
          <img src="/freight-forwarding.svg" alt="Freight Forwarding" />
          <h2>Freight Forwarding</h2>
          <p>Таможенное оформление и доставка</p>
          Подробнее
        </div>
      </div>
    </div>
  );
}
