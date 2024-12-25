import axios from 'axios';

export async function getList(id) {
  try {
    if (id === undefined) return;
    const res = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}
