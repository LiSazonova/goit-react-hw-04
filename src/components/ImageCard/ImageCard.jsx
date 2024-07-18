import s from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  const {
    alt_description,
    urls: { small },
  } = image;

  return (
    <>
      <img className={s.image} src={small} alt={alt_description} />
    </>
  );
};

export default ImageCard;
