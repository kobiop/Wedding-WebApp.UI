import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GalleryButton.css'; // Import the CSS file

const GalleryButton = () => {
    const navigate = useNavigate();

    return (
        <div className="styled-wrapper">
            <a className="button type1" onClick={() => navigate('/gallery')}>
                <span className="btn-txt">Gallery</span>
            </a>
        </div>
    );
};

export default GalleryButton;
