import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const fetchEmployees = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const updateEmployeeStatus = async (userId: number, status: string) => {
  const response = await axios.post(`${API_BASE_URL}/users/${userId}`, {
    status,
  });
  return response.data;
};
