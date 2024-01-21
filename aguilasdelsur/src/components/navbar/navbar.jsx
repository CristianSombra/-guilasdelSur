import React from "react";
import { Link } from "react-router-dom";
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../assets/logoas.png"
import "./navbar.css"


function Navbar () {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black py-0">
            <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to="/home">
                            <img src={logo} alt="logo" width="160"/>
                        </Link>
                    </div>
                    <button className="navbar-toggler icon-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ fontSize: '2em' }}>
                        <FontAwesomeIcon icon={faMotorcycle} />
                    </button>
                    <div className= "collapse navbar-collapse navbar-custom justify-content-center text-center"  id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                        <li className="nav-item nav-item-custom">
                            <Link to="/home" className="nav-link active" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item nav-item-custom">
                            <Link to="/about" className="nav-link active" aria-current="page">Nosotros</Link>
                        </li>
                        <li className="nav-item nav-item-custom">
                            <Link to="/galery" className="nav-link active" aria-current="page">Galeria</Link>
                        </li>
                            <li className="nav-item nav-item-custom">
                                <Link to="/contact" className="nav-link active" aria-current="page">Contáctanos</Link>
                            </li>
                        </ul>
                    </div> 
                </div>
        </nav>
        
    )
};


export default Navbar;