import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Thumbnail = ({ link, width, height }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const handleClick = () => {
        if (!showVideo) {
            createThumbnail();
        }
        setShowVideo(true);
    };

    const createThumbnail = () => {
        const videoElement = document.createElement("video");
        videoElement.src = link;

        videoElement.addEventListener('loadedmetadata', () => {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            const context = canvas.getContext('2d');
            context.drawImage(videoElement, 0, 0, width, height);

            const thumbnailUrl = canvas.toDataURL();
            setThumbnailUrl(thumbnailUrl);
            console.log(thumbnailUrl);
        });
    };
    useLayoutEffect(() => {
        createThumbnail()
    }, [])

    return (
        <div>
            {showVideo ? (
                <video ref={videoRef} className="Media flex justify-content-center" src={link} alt={link} controls />
            ) : (
                <img
                    className="Thumbnail"
                    src={thumbnailUrl || 'placeholder-image-url'} // Replace with your actual placeholder image URL
                    alt="Thumbnail"
                    onClick={handleClick}
                />
            )}
        </div>
    );
};

export default Thumbnail;