import "./product.css"

const Products = () => {
    return(<div>

            <div className="marble">
                <img src="/marbleboard.png" alt="marbleboard"/>

                <div>
                    <div className="marbletiles">
                    <span className="marblelook">Marble look Tiles</span>
                    <p>Exclusive collection of Marble look tiles in various color
                        and surface options.</p>
                </div>

                    <div>
                        <ul className="formats">
                            Available formats (cm) -
                            <li>30 x 60</li>
                            <li>60 x 60</li>
                            <li>60 x 120</li>
                            <li>80 x 80</li>
                            <li>120 x 120</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Products