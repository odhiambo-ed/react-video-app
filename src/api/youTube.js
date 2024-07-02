import axios from 'axios';

const apiKey = process.env.GOOGLE_API_KEY;

const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const getYouTubeVideos = async (searchTerm) => {
    try {
        const response = await api.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: apiKey,
                q: searchTerm,
                type: 'video',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        throw error;
    }
};