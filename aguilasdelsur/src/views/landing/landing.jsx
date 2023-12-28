import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/landing.png";
import "./landing.css";

const Landing = () => {
    useEffect(() => {
    // Ocultar barras de desplazamiento al cargar la página
    document.body.style.overflow = "hidden";

    // Restaurar barras de desplazamiento al desmontar el componente
    return () => {
        document.body.style.overflow = "visible";
    };
}, []);

return (
    <div className="container-fluid container-fluid-landing d-flex align-items-center justify-content-center">
        <div className="container-intro text-center">
            <div>
                <img src={logo} className="img-fluid mt-3 img-landing" alt="fondo" />
            </div>
            <div className="landing">
                <h2>Agrupación Motera</h2>
            </div>
            <div className="fire-text">
                <h3>Águilas del Sur</h3>
            </div>
            <div>
                <Link to="/home" className="my-3 icon-landing">
                    <button className="btn btn-outline-light">Ingresar</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Landing;
