import React from "react";
import {Link} from "react-router-dom";

const headerStyle={
    backgroundColor:"#ffffff",
    padding:"16px 0",
    borderBottom:"20px",
    textAlign:"center"
}

const linkStyle={
    color:"#333",
    textDecoration:"none",
}
export default function Header(){

    return(
        <header style={headerStyle}>
            <nav>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/projects" style={linkStyle}>Projects</Link>
            </nav>
        </header>
    )
}