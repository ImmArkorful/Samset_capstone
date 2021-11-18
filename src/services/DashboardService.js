import axios from "axios";
import { TEST_URL } from "../constants";

const getDashboardItems = async () => {
  const {
    data: { data },
  } = await axios.get(TEST_URL + "/dashboard");
  return data;
};

export const DashboardService = {
  getDashboardItems,
};
