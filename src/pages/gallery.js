import React from 'react';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  return (
    <div className={`container ${styles.galleryContainer}`}>
      <h1 className={styles.title}>Gallery</h1>
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={styles.imageWrapper}>
              <img 
                src={`/images/gallery/personal-img${index + 1}.jpg`} 
                alt={`Personal Image ${index + 1}`} 
                className="img-fluid"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
