import React from 'react';
import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.css';

const loaderRef = document.querySelector('#loader-root');

const LoaderModal = () => {
  return createPortal(
    <div className="Loader">
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={120}
        width={120}
        timeout={0}
      />
    </div>,
    loaderRef,
  );
};

export default LoaderModal;
