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

                    <div className="formats">
                        Available formats (cm) -
                        <div class="format">
                            <img src="/Ellipse.png" alt="Ellipse"/>30 x 60
                        </div>
                        <div class="format">
                            <img src="/Ellipse.png" alt="Ellipse"/>60 x 60
                        </div>
                        <div class="format">
                            <img src="/Ellipse.png" alt="Ellipse"/>60 x 120
                        </div>
                        <div class="format">
                            <img src="/Ellipse.png" alt="Ellipse"/>80 x 80
                        </div>
                        <div class="format">
                            <img src="/Ellipse.png" alt="Ellipse"/>120 x 120
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-white">
                <h1>Marble Look - White</h1>
                <div className="ml-white-tiles">
                    <div className="ml-white-tile">
                        <img src="/tanzania.png" alt="tanzania"/>
                    </div>
                    <div className="ml-white-tile">
                        <img src="/bianco.png" alt="bianco"/>
                    </div>
                    <div className="ml-white-tile">
                        <img src="/jaguar.png" alt="jaguar"/>
                    </div>
                    <div className="ml-white-tile">
                        <img src="/statuary.png" alt="statuary"/>
                    </div>
                </div>
            </div>

            <div className="ml-beige">
                <h1>Marble Look - Beige</h1>
                <div className="ml-beige-tiles">
                    <div className="ml-beige-tile">
                        <img src="/tanzania.png" alt="tanzania"/>
                    </div>
                    <div className="ml-beige-tile">
                        <img src="/bianco.png" alt="bianco"/>
                    </div>
                    <div className="ml-beige-tile">
                        <img src="/jaguar.png" alt="jaguar"/>
                    </div>
                    <div className="ml-beige-tile">
                        <img src="/statuary.png" alt="statuary"/>
                    </div>
                </div>
            </div>

            <div className="ml-grey">
                <h1>Marble Look - Grey</h1>
                <div className="ml-grey-tiles">
                    <div className="ml-grey-tile">
                        <img src="/tanzania.png" alt="tanzania"/>
                    </div>
                    <div className="ml-grey-tile">
                        <img src="/bianco.png" alt="bianco"/>
                    </div>
                    <div className="ml-grey-tile">
                        <img src="/jaguar.png" alt="jaguar"/>
                    </div>
                    <div className="ml-grey-tile">
                        <img src="/statuary.png" alt="statuary"/>
                    </div>
                </div>
            </div>

            <div className="ml-black">
                <h1>Marble Look - Black</h1>
                <div className="ml-black-tiles">
                    <div className="ml-black-tile">
                        <img src="/tanzania.png" alt="tanzania"/>
                    </div>
                    <div className="ml-black-tile">
                        <img src="/bianco.png" alt="bianco"/>
                    </div>
                    <div className="ml-black-tile">
                        <img src="/jaguar.png" alt="jaguar"/>
                    </div>
                    <div className="ml-black-tile">
                        <img src="/statuary.png" alt="statuary"/>
                    </div>
                </div>
            </div>

            <div className="ml-green">
                <h1>Marble Look - Green</h1>
                <div className="ml-green-tiles">
                    <div className="ml-green-tile">
                        <img src="/tanzania.png" alt="tanzania"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Products