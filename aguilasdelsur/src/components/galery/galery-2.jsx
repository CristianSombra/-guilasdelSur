import React from "react";

const img1 = "https://res.cloudinary.com/minube2024/image/upload/v1705113651/aguilasdelsur/fotos/Galery2/img-1_bhej2n.jpg";
const img2 = "https://res.cloudinary.com/minube2024/image/upload/v1705113652/aguilasdelsur/fotos/Galery2/img-2_lf38eo.jpg";
const img3 = "https://res.cloudinary.com/minube2024/image/upload/v1705113651/aguilasdelsur/fotos/Galery2/img-3_mfpgsj.jpg";
const img4 = "https://res.cloudinary.com/minube2024/image/upload/v1705113653/aguilasdelsur/fotos/Galery2/img-4_jhcexi.jpg";
const img5 = "https://res.cloudinary.com/minube2024/image/upload/v1705113652/aguilasdelsur/fotos/Galery2/img-5_kfxgu8.jpg";
const img6 = "https://res.cloudinary.com/minube2024/image/upload/v1705113652/aguilasdelsur/fotos/Galery2/img-6_tgdxrb.jpg";
const img7 = "https://res.cloudinary.com/minube2024/image/upload/v1705113653/aguilasdelsur/fotos/Galery2/img-7_ayqlwd.jpg";

function Galery2 () {
    return (
        <div className="container">
            <div className="row mb-5 d-flex justify-content-center">
                <div className="col-12 col-md-8">
                    <div id="mi-carousel2" className="carousel slide carousel-fade" data-bs-ride="carousel">
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
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#mi-carousel2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#mi-carousel2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#mi-carousel2" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#mi-carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#mi-carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#mi-carousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#mi-carousel2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#mi-carousel2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#mi-carousel2" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#mi-carousel2" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galery2;