'use client'
import Link from "next/link";
import React from "react";
import "./services.css"
import { usePathname } from 'next/navigation';

export default function ServicesLayout({ children }) {
    const servicesPath = "/Services";
    const oEMOperationPath = "/Services/OEMOperation"
    const qualityAssurancePath = "/Services/QualityAssurance"
    const freightForwardingPath = "/Services/FreightForwarding"
    const pathname = usePathname();
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
                    <Link href={"/Services"}
                          style={{color: JSON.stringify(pathname) === JSON.stringify(servicesPath) ? "#E6AF5D" : "#616161"}}>
                        Product Sourcing
                    </Link>
                    <Link href={"/Services/OEMOperation"}
                          style={{color: JSON.stringify(pathname) === JSON.stringify(oEMOperationPath) ? "#E6AF5D" : "#616161"}}>
                        OEM Operation
                    </Link>
                    <Link href={"/Services/QualityAssurance"}
                          style={{color: JSON.stringify(pathname) === JSON.stringify(qualityAssurancePath) ? "#E6AF5D" : "#616161"}}>
                        Quality Assurance
                    </Link>
                    <Link href={"/Services/FreightForwarding"}
                          style={{color: JSON.stringify(pathname) === JSON.stringify(freightForwardingPath) ? "#E6AF5D" : "#616161"}}>
                        Freight Forwarding
                    </Link>
                </div>

                {children}</div>
        </div>
    );
}
