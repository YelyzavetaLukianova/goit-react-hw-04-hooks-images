import axios from 'axios';
const API_KEY = '24484314-ee5138bfa536a1ec729b18d47';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const dataApi = async (data, page) => {
  const result = await axios.get(
    `?key=${API_KEY}&q=${data}&imageType=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`,
  );
  const { hits } = result.data;

  return hits;
};

export default dataApi;
