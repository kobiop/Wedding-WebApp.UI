import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InputButton.css'; // Import the CSS file

const InputButton = () => {
    const navigate = useNavigate();

    const handleFileChange = async (event) => {
        const files = event.target.files;
        const userId = localStorage.getItem("userId");

        if (files.length > 0 && userId) {
            const formData = new FormData();
            formData.append('file', files[0]);

            try {
                const response = await fetch(`https://localhost:7221/Photos/upload?userId=${userId}`, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('File uploaded successfully');
                    navigate('/gallery');
                } else {
                    console.error('Failed to upload file:', response.statusText);
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            console.error('No file selected or userId not found.');
        }
    };

    return (
        <div className="styled-wrapper">
            <label className="button type1">
                <input
                    type="file"
                    accept="image/*"
                    capture="camera"
                    onChange={handleFileChange}
                />
                <span className="btn-txt">Upload</span>
            </label>
        </div>
    );
};

export default InputButton;
