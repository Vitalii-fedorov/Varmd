'use client'
import "./product.css"
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

export default function ProductsLayout({ children }) {
    const productsPath = "/Products";
    const stoneLookPath = "/Products/StoneLook"
    const CementLookPath = "/Products/CementLook"
    const pathname = usePathname();
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
                    <Link href={"/Products"}
                          style={{color: JSON.stringify(pathname) === JSON.stringify(productsPath) ? "#E6AF5D" : "#616161"}}>
                        Marble Look
                    </Link>
                    <Link href={"/Products/StoneLook"}
                          style={{color: JSON.stringify(pathname) === JSON.stringify(stoneLookPath) ? "#E6AF5D" : "#616161"}}>
                        Stone Look
                    </Link>
                    <Link href={"/Products/CementLook"}
                          style={{color: JSON.stringify(pathname) === JSON.stringify(CementLookPath) ? "#E6AF5D" : "#616161"}}>
                         Cement Look
                    </Link>
                </div>

                {children}</div>
            </div>
    );
}


