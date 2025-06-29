import http from "../../../services/apiService";
const getPetById = async (id) => {
  const response = await http.get(`/pets/${id}`);
  return response.data;
};
const updatePet = async (petData) => {
  if (
    !petData ||
    !petData.type ||
    !petData.breed ||
    !petData.name ||
    !petData.age ||
    !petData.size
  ) {
    throw new Error("Invalid pet data provided");
  }
  console.log("Updating pet with data:", petData);
  const response = await http.post(`/pets/${petData.id}`, petData);
  return response.data;
};
export const ApiService = {
  getPetById,
  updatePet,
};
