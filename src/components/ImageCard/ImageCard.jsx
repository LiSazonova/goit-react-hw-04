const ImageCard = ({ image }) => {
  const {
    alt_description,
    urls: { small },
  } = image;

  return (
    <div>
      <img src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
