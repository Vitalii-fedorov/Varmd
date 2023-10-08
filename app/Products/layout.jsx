import "./product.css"
import Link from "next/link";
import React from "react";

export default function ProductsLayout({ children }) {
    return (
            <div>
                <div className="header-sec">
            Products
            </div>

            <div className="products">
                <h1 className="products-headline">Explore a wide range of
                    <br/>Quality Assured products</h1>
                <br/><br/>
                <h4 className="products-footline">Hand-picked collections of our indoor & outdoor tiles, carefully sourced from
                    <br/>high-tech manufacturers.</h4>
                    <br/><br/>

                <div className="products-navigation">
                    <Link href={"/Products"}>Marble Look</Link>
                    <Link href={"/Products/StoneLook"}>Stone Look</Link>
                    <Link href={"/Products/CementLook"}>Cement Look</Link>
                </div>

                {children}</div>
            </div>
    );
}
