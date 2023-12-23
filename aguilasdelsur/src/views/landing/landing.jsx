import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/landing.png"
import "./landing.css";

const Landing = () => {
    useEffect(() => {
        // Ocultar barras de desplazamiento al cargar la página
        document.body.style.overflow = 'hidden';
    
        // Restaurar barras de desplazamiento al desmontar el componente
        return () => {
        document.body.style.overflow = 'visible';
        };
    }, []);


    return (
        <div className="container-fluid container-fluid-landing">
        <div className="container-intro d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="row">
                <div className="col-12 col-md-10">
                    <img src={logo} className="img-fluid mb-3" alt="fondo" />
                <div className="col text-center">    
                    <Link to="/home" className="my-5 btn-1">
                        <button className="btn btn-outline-light btn-lg">Ingresar</button>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};


export default Landing;