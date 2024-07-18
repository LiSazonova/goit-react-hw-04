import { useState, useEffect } from 'react';
import fetchImages from './api/unsplash-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        const newImages = await fetchImages(query);
        setImages(prevImages => [...prevImages, ...newImages]);
      } catch (error) {
        console.log(error);
      }
    };

    getImages();
  }, [query]);

  const handleSearch = searchQuery => {
    setQuery(searchQuery);
    setImages([]);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {query && <ImageGallery images={images} />}
      <Toaster />
    </div>
  );
};

export default App;
