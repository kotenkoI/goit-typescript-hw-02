import axios from "axios";

const PIXABAY_API_KEY = '41512134-7ce1694d07a59eb7d39c787c8';
const API_KEY_UNSPLASH = 'DpHeLCf8Myf-ctad09x85yFdS8xRIxlglgRermDkhpQ';

export const getImagesPixabay = async (query: string, pageParam: number): Promise<any> => {
    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${pageParam}`;

    const { data } = await axios.get(url);
    return data;
};

export const getImages = async (query: string, page: number): Promise<any> => {
    const urlUnsplash = `https://api.unsplash.com/search/photos?client_id=${API_KEY_UNSPLASH}&query=${query}&page=${page}&per_page=20`;

    const { data } = await axios.get(urlUnsplash);
    return data;
};
