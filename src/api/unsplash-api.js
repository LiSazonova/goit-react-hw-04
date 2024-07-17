import axios from "axios";

const ACCESS_KEY = 'nTSaLnkrCBk5_h_xtUGEUPU6WfrzjblX0apdeR4fN84';

const fetchImages = async (query) => {
    const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&${query}`);
    return response.data;
}

export default fetchImages;
