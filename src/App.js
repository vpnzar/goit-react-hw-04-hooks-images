import './App.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

function App() {
  const [queryImg, setQueryImg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [imgItem, setImgItem] = useState([]);
  const [imgItems, setImgItems] = useState(0);
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleSearchFormSubmit = queryImg => {
    setQueryImg(queryImg);
    // if (imgItems === 0) {
    //   setPageNum(1);
    // }
  };

  const handleBtnNum = pageNum => {
    setPageNum(pageNum);
  };

  const handleImgItem = imgItem => {
    setShowModal(!showModal);
    setImgItem(imgItem);
  };

  const imgItemsListLength = imgItems => {
    setImgItems(imgItems);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchFormSubmit} />
      <ToastContainer autoClose={3000} />
      <ImageGallery>
        <ImageGalleryItem
          queryImg={queryImg}
          pageNum={pageNum}
          imgItemsList={imgItemsListLength}
          onClick={handleImgItem}
        />
      </ImageGallery>
      {imgItems > 0 && <Button onClick={handleBtnNum} />}
      {showModal && <Modal imgItem={imgItem} onClose={toggleModal} />}
    </div>
  );
}

export default App;
