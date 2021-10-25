import { useState, useEffect } from 'react';
import './Button.module.css';

function Button(props) {
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    props.onClick(pageNum);

    setTimeout(() => {
      window.scrollTo({
        top: document.lastChild.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const handleClick = () => {
    setPageNum(prev => prev + 1);

    return;
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Load More
      </button>
    </div>
  );
}

export default Button;
