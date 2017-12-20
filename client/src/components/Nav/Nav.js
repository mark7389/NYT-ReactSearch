import React from "react";
import {Link} from 'react-router-dom';
import "./Nav.css";
const Nav = () =>{

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/home">NEW YORK TIMES <br/> Article Search</Link>
                    <div className="left image" />
                    <ul className="right">
                        <li><Link style={{"color":"#000", width:"100%"}} to="/home">Home</Link></li>
                        <li><Link style={{"color":"#000", width:"100%"}} to="/saved">Saved Articles</Link></li>
                    </ul>
                </div>
            </nav>
        )


}

export default Nav;