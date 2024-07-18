import { useState, useEffect } from 'react';
import fetchImages from './api/unsplash-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);

      try {
        const newImages = await fetchImages(query);
        setImages(prevImages => [...prevImages, ...newImages]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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
      {loading && <Loader />}
      <Toaster />
    </div>
  );
};

export default App;
