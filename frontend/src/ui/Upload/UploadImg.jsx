import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Navbar from "../Navbar/Slider";
import '../AnalysisPage/Analysis.scss';
import './UploadImg.scss'
import { useNavigate } from 'react-router-dom';


const UploadImg = () => {
    const [images, setImages] = useState([]);
    const [mainImageIndex, setMainImageIndex] = useState(-1);

    const navigate = useNavigate();

    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;
        const newImages = [];

        // Check if the total number of selected images is more than five
        if (selectedFiles.length + images.length > 5) {
            alert("You can only upload up to five images.");
            return;
        }

        // Process each selected file
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            const imageUrl = URL.createObjectURL(file);

            // Create an image object and add it to the array
            newImages.push({
                url: imageUrl,
                isMain: false,
            });
        }

        // Update the state with the new images
        setImages([...images, ...newImages]);
    };

    const handleSetAsMain = (index) => {
        setMainImageIndex(index);
        const updatedImages = images.map((image, i) => ({
            ...image,
            isMain: i === index,
        }));
        setImages(updatedImages);
    };

    const handleDeleteImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
        if (mainImageIndex === index) {
            setMainImageIndex(-1);
        }
    };

    const handleQuantityChange = (newValue) => {
        console.log("New quantity value: " + newValue);
    };

    return (
        <div>
            <Navbar />
            <div className="chooseFileDiv">
                <div className="">
                    <div className="imagesTab">
                        <div className="mImage">
                            {mainImageIndex !== -1 && (
                                <img
                                    style={{
                                        width: "200px", height: "100%", border: "dashed",
                                        padding: "3px"
                                    }}
                                    src={images[mainImageIndex].url}
                                    alt="Main"
                                    className=""
                                />
                            )}
                        </div>

                        <div className="sideImages">
                            {images.map((image, index) => (
                                <div key={index} className="relative">
                                    <div
                                        onClick={() => handleSetAsMain(index)}
                                        className=""

                                    >
                                        <img
                                            style={{ width: "100px", height: "100px" }}
                                            src={image.url}
                                            alt={`Images ${index + 1}`}
                                            className=""
                                        />
                                        {!image.isMain && (
                                            <div className="">
                                                
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleDeleteImage(index)}
                                        className=""
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} />
                </div>
            </div>





            <div><button type="button" className="btn btn-primary" onClick={() => navigate('/analysis')}>Analysis Page</button></div>
            {/* <div><button onClick={() => navigate('/result')}>2nd page</button></div> */}
        </div>
    );
};


export default UploadImg;