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

function ImageGalleryItem(props) {
  const [status, setStatus] = useState('init');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const { queryImg, imgItemsList } = props;
    setStatus('pending');
    newPixabay.searchQuery = queryImg;
    newPixabay.searchPage = 1;
    newPixabay
      .searchPhotos()
      .then(searchResults => {
        if (props.queryImg === '') {
          setStatus('init');
        } else if (searchResults.length > 0) {
          setSearchResults(searchResults);
          imgItemsList(searchResults.length);
          setStatus('success');
        } else if (searchResults.length === 0) {
          setStatus('incorrect');
          toast.error('PLEASE, INPUT CORRECT REQUEST!!!');
          // props.pageNum = 1;
          imgItemsList(searchResults.length);
        }
      })
      .catch(() => {
        setStatus('error');
      });
  }, [props.queryImg]);

  useEffect(() => {
    const { pageNum } = props;
    setStatus('pending');
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
  }, [props.pageNum]);

  const setActiveImgIdx = index => {
    const activeImg = searchResults[index];
    props.onClick(activeImg);
  };

  return (
    <>
      {props.queryImg === '' && <h1>Hello! Search something...</h1>}
      {status === 'pending' && <Loader />}
      {status === 'incorrect' && <h1>No results were found...</h1>}
      {status === 'success' &&
        searchResults.length > 0 &&
        searchResults.map((img, index) => {
          return (
            <li key={img.id} className={s.ImageGalleryItem}>
              <img
                src={img.webformatURL}
                alt={img.tags}
                className={s.ImageGalleryItemImage}
                onClick={() => setActiveImgIdx(index)}
              />
            </li>
          );
        })}
      {status === 'error' && toast.error('ALARM!!!')}
    </>
  );
}

ImageGalleryItem.propTypes = {
  queryImg: PropTypes.string.isRequired,
  pageNum: PropTypes.number.isRequired,
  imgItemsList: PropTypes.func.isRequired,
  activeImg: PropTypes.number,
};

export default ImageGalleryItem;
