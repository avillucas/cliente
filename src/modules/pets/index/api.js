
import http from '../../../services/apiService';



const getAll = async () => {
  const response = await http.get(`/pets`);
  return response.data;
};

const deletePet = async (id) => {
  const response = await http.delete(`/pets/${id}`);
  return response.data;
};

export const ApiService = {
  deletePet,
  getAll,
};