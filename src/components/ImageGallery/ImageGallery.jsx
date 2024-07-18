import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id} onClick={() => onImageClick(image)}>
            <h3>{image.alt_description}</h3>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
