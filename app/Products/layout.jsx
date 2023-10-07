import "./product.css"

export default function ProductsLayout({ children }) {
    return (

            <div>
                <div className="header-sec">
            Products
            </div>

            <div className="products">
                <h1>Explore a wide range of
                    <br/>Quality Assured products</h1>
                <h4>Hand-picked collections of our indoor & outdoor tiles, carefully sourced from
                    <br/>high-tech manufacturers.</h4>
            </div>
                {children}
            </div>

    );
}
