import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

function ImageGalleryItem({ smallPhoto, bigPhoto, id, onClick }) {
  return (
    <li className="ImageGalleryItem" onClick={onClick}>
      <img
        className="ImageGalleryItem__image"
        src={smallPhoto}
        alt={bigPhoto}
        id={id}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  smallPhoto: PropTypes.string,
  bigPhoto: PropTypes.string,
  id: PropTypes.number,
};

export default ImageGalleryItem;
