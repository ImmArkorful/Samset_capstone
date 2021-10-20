import axios from "axios";
import { TEST_URL } from "../constants";

const searchProperties = async (data) => {
  const response = await axios.post(TEST_URL + "/properties/search", {
    ...data,
  });
  return response.data;
};

const getSearchConstants = async () => {
  const response = await axios.get(TEST_URL + "/properties/search/constants");
  return response.data;
};

export const SearchService = {
  searchProperties,
  getSearchConstants,
};
