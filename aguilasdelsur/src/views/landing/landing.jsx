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
            <div className="container-intro " style={{ minHeight: '100vh' }}>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 text-center">
                        <img src={logo} className="img-fluid mt-5" alt="fondo" />
                    </div>
                    <div className="col-12 text-center">    
                        <Link to="/home" className="my-3 fire-text">
                            <h1>Ingresar</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Landing;