import React, { useState } from "react";
import img1 from "../../assets/galery1/img-1.png";
import img2 from "../../assets/galery1/img-2.png";
import img3 from "../../assets/galery1/img-3.png";
import img4 from "../../assets/galery1/img-4.png";
import img5 from "../../assets/galery1/img-5.png";
import img6 from "../../assets/galery1/img-6.png";
import img7 from "../../assets/galery1/img-7.png";
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