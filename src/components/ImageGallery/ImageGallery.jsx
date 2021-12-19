import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery1.css';

const ImageGallery = ({ takeLargeImage, hits }) => {
  return (
    <>
      <ul className="ImageGallery">
        {hits.map(({ webformatURL, largeImageURL, id }) => (
          <ImageGalleryItem
            smallPhoto={webformatURL}
            bigPhoto={largeImageURL}
            key={id}
            onClick={() => takeLargeImage(largeImageURL)}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  key: PropTypes.number,
  smallPhoto: PropTypes.string,
  bigPhoto: PropTypes.string,
};

export default ImageGallery;
