
import http from '../../../services/apiService';


const createPet = async (petData) => {
  if(!petData || !petData.type || !petData.breed || !petData.name || !petData.age || !petData.size) {
    throw new Error("Invalid pet data provided");
  }
  console.log("Creating pet with data:", petData);  
  const response = await http.post(`/pets/`, petData);
  return response.data;
};
export const ApiService = {
  createPet,
};