// import axios from 'axios';

// const API_URL = 'http://localhost:3000';
// axios.defaults.baseURL = API_URL;

//  const fetchCountry = async()=> {
//    const {data} = await axios.get('/contries');
//   if (!data) {
//       throw new Error('Что-то пошло не так');
//     }
//     return await data;
         
    
// }

async function fetchCountry ()  {
    const response = await fetch('http://localhost:3000/contries');
    if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }
    return await response.json();
};
export default fetchCountry;