/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Pixabay from '../Services/Pixabay';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const base_url = 'https://pixabay.com/api/';
const api_key = '23038221-87f79236823d8e345a162521c';
const newPixabay = new Pixabay(base_url, api_key);

export const useKey = (key, init_value) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? init_value,
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

function ImageGalleryItem(props) {
  const { pageNum, queryImg, imgItemsList } = props;
  const [status, setStatus] = useState('init');
  const [searchResults, setSearchResults] = useKey('keyImages', []);

  useEffect(() => {
    setStatus('pending');
    if (!queryImg.trim()) {
      setSearchResults([]);
      return;
    }

    setStatus('pending');
    newPixabay.resetPage();
    newPixabay.searchQuery = queryImg;
    newPixabay.searchPage = pageNum;
    newPixabay
      .searchPhotos()
      .then(searchResults => {
        setSearchResults(searchResults);
        imgItemsList(searchResults.length);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [queryImg]);

  useEffect(() => {
    const { pageNum } = props;
    newPixabay.searchPage = pageNum;
    newPixabay
      .searchPhotos()
      .then(results => {
        setSearchResults(prev => [...prev, ...results]);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [pageNum]);

  const setActiveImgIdx = index => {
    const activeImg = searchResults[index];
    props.onClick(activeImg);
  };

  if (!queryImg.trim()) {
    return <h1>Hello! Search something...</h1>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (queryImg.trim() && searchResults.length === 0) {
    return <h1>No results were found...</h1>;
  }
  if (status === 'success') {
    return (
      <>
        {searchResults.length > 0 &&
          searchResults.map((img, index) => (
            <li key={img.id} className={s.ImageGalleryItem}>
              <img
                src={img.webformatURL}
                alt={img.tags}
                className={s.ImageGalleryItemImage}
                onClick={() => setActiveImgIdx(index)}
              />
            </li>
          ))}
      </>
    );
  }
  if (status === 'error') {
    return status === 'error' && toast.error('ALARM!!!');
  }
}

ImageGalleryItem.propTypes = {
  queryImg: PropTypes.string.isRequired,
  pageNum: PropTypes.number.isRequired,
  imgItemsList: PropTypes.func.isRequired,
  activeImg: PropTypes.number,
};

export default ImageGalleryItem;
