
import http from '../../../services/apiService';



const getAll = async () => {
  const response = await http.get(`/pets`);
  return response.data;
};

export const ApiService = {
  getAll,
};