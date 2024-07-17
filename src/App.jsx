import { useEffect, useState } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import fetchImages from './api/unsplash-api';

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetchImages();
        setImages(response);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);
  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
