import { useState, useEffect } from 'react';
import fetchImages from './api/unsplash-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);

      try {
        const newImages = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...newImages]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = searchQuery => {
    setQuery(searchQuery);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {query && <ImageGallery images={images} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster />
    </div>
  );
};

export default App;
