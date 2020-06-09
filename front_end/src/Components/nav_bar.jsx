import React from "react";

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-info">{totalCounters}</span>
            </a>
        </nav>)

}
export default NavBar