import axios from 'axios';

const URL = "https://pixabay.com/api/";
const KEY = "42308904-b1dd744900322a7d4765515c1";

export async function fetchPhoto(q, page, perPage) {
    const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await axios.get(url);
    return response.data;          
};