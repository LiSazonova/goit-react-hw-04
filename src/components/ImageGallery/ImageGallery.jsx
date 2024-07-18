import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.gallery}>
        {images.map(image => (
          <li
            className={s.gallery__item}
            key={image.id}
            onClick={() => onImageClick(image)}
          >
            {/* <h3>{image.alt_description}</h3> */}
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
