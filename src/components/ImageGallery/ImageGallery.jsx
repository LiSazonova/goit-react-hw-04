const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <h3>{image.alt_description}</h3>
            <img src={image.urls.small} alt={image.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
