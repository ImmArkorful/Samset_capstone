import axios from "axios";

import { TEST_URL } from "../constants/ApplicationConstants";
const getAppSettings = async () => {
  const response = await axios.get(`${TEST_URL}/appsettings`);
  return response;
};
const getAboutUs = async () => {
  return await axios.get(`${TEST_URL}/appsettings/aboutus`);
};

const getPrivacyPolicy = async () => {
  return await axios.get(`${TEST_URL}/appsettings/privacypolicy`);
};

const getUserTerms = async () => {
  return await axios.get(`${TEST_URL}/appsettings/userterms`);
};

export const AppSettingsService = {
  getAppSettings,
  getAboutUs,
  getPrivacyPolicy,
  getUserTerms,
};
