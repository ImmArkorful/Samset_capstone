import axios from "axios";
import { TEST_URL } from "../constants";

const getDashboardItems = async () => {
  const response = await axios.get(TEST_URL + "/dashboard");
  return response.data;
};

export const DashboardService = {
  getDashboardItems,
};
