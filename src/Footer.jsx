import React from "react";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="text-center fixed-bottom">
                <p className="font-weight-bold  tshadow">copyright © {year}</p>
            </div>
        </>
    )
}
export default Footer;