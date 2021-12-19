import { useState } from 'react';
import { useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Button from './components/Button/Button/Button';
import Modal from './components/Modal/Modal.jsx';
import LoaderModal from './components/Loader/Loader.jsx';
import './App.css';
import dataApi from '../src/services/Api';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [imageName, setImageName] = useState('');
  const [isLoadMoreShow, setIsLoadMoreShow] = useState(false);

  const onModalOpen = () => setIsOpenModal(true);
  const onModalClose = () => setIsOpenModal(false);

  const takeLargeImage = img => {
    setLargeImageURL(img);
    onModalOpen();
  };

  useEffect(() => {
    if (!imageName) return;
    setLoading(true);
    const getImages = async () => {
      try {
        const hits = await dataApi(imageName, page);
        setHits(prevHits => [...prevHits, ...hits]);
        setLoading(false);
        setIsLoadMoreShow(true);
        if (hits.length < 12) {
          setIsLoadMoreShow(false);
        }
      } catch (error) {
        alert('error!');
        setLoading(false);
      }
    };
    getImages();
  }, [imageName, page]);

  const handleFormSubmit = query => {
    //
    setIsLoadMoreShow(false);
    setImageName(query);
    setPage(1);
    setHits([]);
  };

  const onClick = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      <ImageGallery hits={hits} takeLargeImage={takeLargeImage} />
      {isLoadMoreShow && <Button onClick={onClick} />}
      {isOpenModal && (
        <Modal bigPhoto={largeImageURL} modalClose={onModalClose} />
      )}
      {loading && <LoaderModal />}
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     hits: [],
//     loading: false,
//     page: 1,
//     imageName: '',
//     isOpenModal: false,
//     largeImageURL: '',
//   };

// onModalOpen = () => this.setState({ isOpenModal: true });
// onModalClose = () => this.setState({ isOpenModal: false });

// takeLargeImage = img => {
//   this.setState({ largeImageURL: img });
//   this.onModalOpen();
// };

// async componentDidMount() {
//   const { imageName, page } = this.state;
//   const data = await dataApi(imageName, page);
//   this.setState({ hits: data.hits });
// }

// async componentDidUpdate(prevProps, prevState) {
//   const { imageName, page, loading } = this.state;

//   if (prevState.page !== page || prevState.imageName !== imageName) {
//     this.setState({ loading: true });
//     try {
//       const data = await dataApi(imageName, page);
//       this.setState(prevState => ({
//         ...prevState,
//         hits:
//           prevState.imageName !== imageName
//             ? data.hits
//             : [...prevState.hits, ...data.hits],
//       }));
//     } catch (error) {
//     } finally {
//       this.setState({ loading: false });
//     }
//   }
// }

// handleFormSubmit = imageName => {
//   this.setState(prevState => ({
//     ...prevState,
//     imageName: imageName,
//     page: 1,
//     hits: [],
//   }));
// };

// onClick = () => {
//   this.setState(prevState => ({
//     ...prevState,
//     page: prevState.page + 1,
//   }));
// };

//   render() {
//     const { hits, isOpenModal, largeImageURL, loading } = this.state;
//     const { handleFormSubmit, onClick } = this;
//     return (
//       <>
//         <Searchbar handleFormSubmit={handleFormSubmit} />
//         <ImageGallery hits={hits} takeLargeImage={this.takeLargeImage} />
//         {hits.length >= 12 && <Button onClick={onClick} />}
//         {isOpenModal && (
//           <Modal bigPhoto={largeImageURL} modalClose={this.onModalClose} />
//         )}
//         {loading && <LoaderModal />}
//       </>
//     );
//   }
// }
