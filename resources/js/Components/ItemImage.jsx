import React from 'react';

const ItemImage = ({ item, className = '', alt = '', fallbackSize = '400x300' }) => {
    const getImageSrc = () => {
        // Priority 1: Database base64 image
        if (item.image_data) {
            return `data:image/jpeg;base64,${item.image_data}`;
        }
        
        // Priority 2: File storage
        if (item.image) {
            return `/storage/${item.image}`;
        }
        
        // Priority 3: Placeholder
        return `https://via.placeholder.com/${fallbackSize}?text=No+Image`;
    };

    const handleError = (e) => {
        // Jika gambar gagal load, coba dari storage
        if (e.target.src.includes('base64') && item.image) {
            e.target.src = `/storage/${item.image}`;
        } else {
            e.target.src = `https://via.placeholder.com/${fallbackSize}?text=No+Image`;
        }
    };

    return (
        <img
            src={getImageSrc()}
            alt={alt || item.name}
            className={className}
            onError={handleError}
        />
    );
};

export default ItemImage;