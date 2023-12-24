import React from "react";
import { Link } from "react-router-dom";
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../assets/logoas.png"
import "./navbar.css"

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black rounded py-0">
            <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={logo} alt="logo" width="160"/>
                    </div>
                    <button className="navbar-toggler icon-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ fontSize: '2em' }}>
                        <FontAwesomeIcon icon={faMotorcycle} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-3">
                            <Link to="/home" className="nav-link active" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link to="/about" className="nav-link active" aria-current="page">Nosotros</Link>
                        </li>
                            <li className="nav-item dropdown me-3">
                                <a className="nav-link dropdown-toggle active" href="galeria" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Galería
                                </a>
                                <ul className="dropdown-menu shadow-lg p-3 mb-3 dropdown-menu-dark bg-dark rounded" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/galery">Fotos</a></li>
                                    <li><a className="dropdown-item" href="/galery">Videos</a></li>
                                </ul>
                            </li>
                            <li className="nav-item me-3">
                            <Link to="/contact" className="nav-link active" aria-current="page">Contáctanos</Link>
                            </li>
                        </ul>
                    </div> 
                </div>
        </nav>
        
    )
};


export default Navbar;