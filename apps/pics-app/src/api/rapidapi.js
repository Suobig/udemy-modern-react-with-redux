import axios from 'axios';

export default axios.create({
  method: 'GET',
  baseUrl: 'https://bing-image-search1.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '00178578a9msh0b3d195f7fbb049p10e8efjsn0183ab30aa8f',
    'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com'
  }
})