import { useState } from 'react';
import PropTypes from 'prop-types';
import '../Searchbar/Searchbar1.css';

const Searchbar = props => {
  const [imageName, setImageName] = useState('');

  const handleNameChange = e => {
    setImageName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (imageName.trim() === '') {
      alert('Enter what do You want');
      return;
    }
    props.handleFormSubmit(imageName);
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm__button">
            <span className="SearchForm__button__label">Search</span>
          </button>

          <input
            name="imageName"
            value={imageName}
            className="SearchForm__input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleNameChange}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Searchbar;
