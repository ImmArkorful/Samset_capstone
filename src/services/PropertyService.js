import axios from "axios";
import { TEST_URL } from "../constants";

const getLikedProperties = async () => {
  const response = await axios.get(TEST_URL + "/properties/likedProperties");
  return response.data;
};

const likeProperty = async (property, isLiked) => {
  const response = await axios.post(TEST_URL + "/properties/like", {
    model: property,
    isLiked,
  });
  return response.data;
};

export const PropertyService = {
  likeProperty,
  getLikedProperties,
};
