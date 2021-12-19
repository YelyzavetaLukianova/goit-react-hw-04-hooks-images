import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './Modal.css';

const Modal = props => {
  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        props.modalClose();
      }
    };
    window.addEventListener('keydown', onEscPress);
    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [props]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      props.modalClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={props.bigPhoto} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

export default Modal;
