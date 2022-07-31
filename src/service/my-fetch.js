import axios from 'axios';

const API_URL = 'http://localhost:3000';
axios.defaults.baseURL = API_URL;

// export const fetchCountry =()=> {


//     return await response.json();
//           axios('/contries')
    
// }
async function fetchCountry ()  {
    const response = await fetch('http://localhost:3000/contries');

    if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }

    return await response.json();
};
export default fetchCountry;