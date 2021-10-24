import { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      props.onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) props.onClose();
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={props.imgItem.largeImageURL} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClos: PropTypes.func,
};

export default Modal;
