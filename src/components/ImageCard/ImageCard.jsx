import s from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  const {
    alt_description,
    urls: { small },
  } = image;

  return (
    <div
      onClick={onClick}
      className={s.imageContainer}
      style={{ cursor: 'pointer' }}
    >
      <img className={s.image} src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
