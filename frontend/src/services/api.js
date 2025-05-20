// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// export const checkBackendStatus = async () => {
//     try {
//         const response = await fetch(`${API_URL}/extract-skills`);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error checking backend status:', error);
//         throw error;
//     }
// }; 

// This should point to your Render backend, not to the same Vercel deployment
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:800/api';

export const extractSkills = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/extract-skills`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error extracting skills:', error);
        throw error;
    }
};