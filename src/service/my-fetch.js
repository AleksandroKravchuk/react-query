import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

const fetchCountry = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/contries');
    return data;
  } catch {
    console.log('Что-то пошло не так');
  }
};

export default fetchCountry;
