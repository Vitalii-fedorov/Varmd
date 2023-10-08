import Link from "next/link";
import React from "react";
import "./services.css"

export default function ServicesLayout({ children }) {
    return (
        <div>
            <div className="header-sec">
                Services
            </div>

            <div className="services">
                <h1 className="services-headline">Quality Tiles, Exceptional Service
                    <br/></h1>
                <br/><br/>
                <h4 className="services-footline">Hand-picked collections of our indoor & outdoor tiles, carefully sourced from
                    <br/>high-tech manufacturers.</h4>
                <br/><br/>

                <div className="services-navigation">
                    <Link href={"/Services"}>Product Sourcing</Link>
                    <Link href={"/Services/OEMOperation"}>OEM Operation</Link>
                    <Link href={"/Services/QualityAssurance"}>Quality Assurance</Link>
                    <Link href={"/Services/FreightForwarding"}>Freight Forwarding</Link>
                </div>

                {children}</div>
        </div>
    );
}
