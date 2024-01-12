import React, { useState } from "react";
const img1 = "https://res.cloudinary.com/minube2024/image/upload/v1705034509/aguilasdelsur/fotos/Galery1/img-1_mlm7lw.png";
const img2 = "https://res.cloudinary.com/minube2024/image/upload/v1705034503/aguilasdelsur/fotos/Galery1/img-2_hdvzi9.png";
const img3 = "https://res.cloudinary.com/minube2024/image/upload/v1705034504/aguilasdelsur/fotos/Galery1/img-3_ukrazp.png";
const img4 = "https://res.cloudinary.com/minube2024/image/upload/v1705034516/aguilasdelsur/fotos/Galery1/img-4_noepdp.png";
const img5 = "https://res.cloudinary.com/minube2024/image/upload/v1705034513/aguilasdelsur/fotos/Galery1/img-5_azektc.png";
const img6 = "https://res.cloudinary.com/minube2024/image/upload/v1705034515/aguilasdelsur/fotos/Galery1/img-6_ugqgs0.png";
const img7 = "https://res.cloudinary.com/minube2024/image/upload/v1705034519/aguilasdelsur/fotos/Galery1/img-7_ic8tyy.png";
import "../index.css";

function Galery1 () {
    const [modalImage, setModalImage] = useState("");

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc)
    };

    return (
        <div className="container">
			<div className="row galery1 g-0 px-4 mb-5">
				<div className="col">
					<div className="row galeria">
						<div className="contenedor-imagen mb-4 col-6 col-lg-4">
							<a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria" onClick={() => handleImageClick(img1)}>
								<img src={img1} className="img-fluid" alt=""/>
							</a>
						</div>

						
						<div className="contenedor-imagen mb-4 col-12 col-lg-8">
							<a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria" onClick={() => handleImageClick(img2)}>
								<img src={img2} className="img-fluid" alt=""/>
							</a>
						</div>

					
						<div className="contenedor-imagen mb-4 col-12 col-lg-8">
							<a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria" onClick={() => handleImageClick(img3)}>
								<img src={img3} className="img-fluid" alt=""/>
							</a>
						</div>

					
						<div className="contenedor-imagen mb-4 col-6 col-lg-4">
							<a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria" onClick={() => handleImageClick(img4)}>
								<img src={img4} className="img-fluid" alt=""/>
							</a>
						</div>

				
						<div className="contenedor-imagen mb-4 col-6 col-lg-4">
							<a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria" onClick={() => handleImageClick(img5)}>
								<img src={img5} className="img-fluid" alt=""/>
							</a>
						</div>

					
						<div className="contenedor-imagen mb-4 col-6 col-lg-4">
							<a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria" onClick={() => handleImageClick(img6)}>
								<img src={img6} className="img-fluid" alt=""/>
							</a>
						</div>

				
						<div className="contenedor-imagen mb-4 col-12 col-lg-4">
							<a href="#" data-bs-toggle="modal" data-bs-target="#modal-galeria" onClick={() => handleImageClick(img7)}>
								<img src={img7} className="img-fluid" alt=""/>
							</a>
						</div>
					</div>

					<div 
						className="modal fade" 
						id="modal-galeria" 
						tabIndex="-1"
						aria-labelledby="modal-galeria"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<img src={modalImage} id="imagen-modal" alt=""/>
							</div>
						</div>	
					</div>
				</div>
			</div>
        </div>
    );
};

export default Galery1;