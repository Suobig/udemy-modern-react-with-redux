import axios from 'axios';

const KEY = 'AIzaSyD7wIb-YsB9EgzFUoBki_ctlYFC_-lOMpo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
}) 
