import axios from "axios";

const ACCESS_KEY = 'nTSaLnkrCBk5_h_xtUGEUPU6WfrzjblX0apdeR4fN84';

const fetchImages = async (query, page) => {
    try {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos`, {
            params: {
                client_id: ACCESS_KEY,
                query,
                page,
            },
        }
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}

export default fetchImages;
