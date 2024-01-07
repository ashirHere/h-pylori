import React, { useState } from "react";
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from "./Navbar/Navbar";
import Index from "./Navbar/Index";

const UploadImg = () => {
    const [images, setImages] = useState([]);
    const [mainImageIndex, setMainImageIndex] = useState(-1);

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
            {/* <Index /> */}
            <div className="w-11/12 mx-auto mt-4 bg-[#697eb5] p-4">
                <div className="">
                    <div className="flex flex-col items-center">
                        {mainImageIndex !== -1 && (
                            <img
                                src={images[mainImageIndex].url}
                                alt="Main"
                                className="w-80  h-40 rounded-lg mb-4"
                            />
                        )}

                        <div className="flex space-x-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative">
                                    <div
                                        onClick={() => handleSetAsMain(index)}
                                        className={`w-20 h-20 cursor-pointer ${mainImageIndex === index ? "border-4 border-blue-500" : ""
                                            }`}
                                    >
                                        {/* Image display */}
                                        <img
                                            src={image.url}
                                            alt={`Images ${index + 1}`}
                                            className="w-full h-full object-cover rounded-md"
                                        />

                                        {/* "Set as Main" text */}
                                        {!image.isMain && (
                                            <div className="absolute bottom-2 left-0 right-0 text-sm text-center">
                                                Set as Main
                                            </div>
                                        )}
                                    </div>

                                    {/* Delete button */}
                                    <button
                                        onClick={() => handleDeleteImage(index)}
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full cursor-pointer"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* File input for uploading images */}
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default UploadImg;