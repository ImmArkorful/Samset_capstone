import axios from "axios";

import { TEST_URL } from "../constants/ApplicationConstants";

const savePropertyFormResponse = async (
  email,
  owner_or_finder,
  rent_or_buy,
  fullName,
  phoneNumber,
  nationality,
  propertyLocation,
  propertyType,
  propertyState,
  paypment,
  price,
  bedrooms,
  bathrooms,
  parkingSpace,
  propertySize,
  postCode,
  date,
  time
) => {
  try {
    const response = await axios.post(TEST_URL + "/users/forms", {
      email,
      owner_or_finder,
      rent_or_buy,
      fullName,
      phoneNumber,
      nationality,
      propertyLocation,
      propertyType,
      propertyState,
      paypment,
      price,
      bedrooms,
      bathrooms,
      parkingSpace,
      propertySize,
      postCode,
      date,
      time,
    });
    const result = response.data;
    if (result?.data?.error) {
      return Promise.reject(Error(result.data.error.message));
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const FormService = {
  savePropertyFormResponse,
};
