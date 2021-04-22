import React from "react";
import Logo from "./images/logo.png";
const Header = () => {
    return (
        <>
            <div className="d-inline-flex p-2 shadow lg bg-warning w-100">
                <img className="rounded mx-2" src={Logo} alt="logo" width="45px" height="45px" />
                <h4 className="pt-0 text-light font-weight-bold tshadow">My Keep Notes</h4>
                <p className="ml-auto pt-2 text-white tshadow font-weight-bold">Made By Adarsh Singh Kushwaha</p>
            </div>
        </>
    )
}
export default Header;