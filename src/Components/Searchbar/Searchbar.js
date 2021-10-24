import { useState } from 'react';
import s from './Searchbar.module.css';

import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

function Searchbar(props) {
  const [queryImg, setQueryImg] = useState('');

  const handleSearchChange = e => {
    setQueryImg(e.target.value.toLowerCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();

    props.onSubmit(queryImg);
    setQueryImg('');
    return;
  };

  return (
    <header className={s.SearchBar}>
      <form className={s.SearchForm} onSubmit={handleSearchSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          onChange={handleSearchChange}
          value={queryImg}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  handleSearchSubmit: PropTypes.func,
};

export default Searchbar;
