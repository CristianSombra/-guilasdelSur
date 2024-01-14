import React from "react";

const img1 = "https://res.cloudinary.com/minube2024/image/upload/v1705113657/aguilasdelsur/fotos/Galery3/img-1_a2mghp.jpg";
const img2 = "https://res.cloudinary.com/minube2024/image/upload/v1705113666/aguilasdelsur/fotos/Galery3/img-2_gwsfjs.jpg";
const img3 = "https://res.cloudinary.com/minube2024/image/upload/v1705113661/aguilasdelsur/fotos/Galery3/img-3_iahi3r.jpg";
const img4 = "https://res.cloudinary.com/minube2024/image/upload/v1705113657/aguilasdelsur/fotos/Galery3/img-4_f5ni6g.jpg";
const img5 = "https://res.cloudinary.com/minube2024/image/upload/v1705113659/aguilasdelsur/fotos/Galery3/img-5_dzp5ay.jpg";
const img6 = "https://res.cloudinary.com/minube2024/image/upload/v1705113660/aguilasdelsur/fotos/Galery3/img-6_ol33nv.jpg";
const img7 = "https://res.cloudinary.com/minube2024/image/upload/v1705113662/aguilasdelsur/fotos/Galery3/img-7_mvro22.jpg";
const img8 = "https://res.cloudinary.com/minube2024/image/upload/v1705113662/aguilasdelsur/fotos/Galery3/img-8_el5sh6.jpg";
const img9 = "https://res.cloudinary.com/minube2024/image/upload/v1705113663/aguilasdelsur/fotos/Galery3/img-9_fpduq1.jpg";


function Galery3 () {
    return (
        <div className="container">
            <div className="row mb-5 d-flex justify-content-center">
                <div className="col-12 col-md-8">
                    <div id="mi-carousel3" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 rounded" src={img1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded" src={img2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded" src={img3} alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded" src={img4} alt="Four slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded" src={img5} alt="Five slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded" src={img6} alt="Six slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded" src={img7} alt="Seven slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded" src={img8} alt="Seven slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 rounded" src={img9} alt="Seven slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#mi-carousel3" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#mi-carousel3" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#mi-carousel3" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galery3;