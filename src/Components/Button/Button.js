import { useState, useEffect } from 'react';
import './Button.module.css';

function Button(props) {
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    props.onClick(pageNum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const handleClick = () => {
    setPageNum(prev => prev + 1);

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);

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
