
import http from '../../../services/apiService';


const getPetById = async (id) => {
  const response = await http.get(`/pets/${id}`);
  return response.data;
};
export const ApiService = {
  getPetById,
};