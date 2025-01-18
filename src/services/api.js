import axios from "axios";

axios.defaults.baseURL = "https://www.sentir.projection-learn.website";

export const getToken = async (username, password) => {
  try {
    const res = await axios.post(`/wp-json/jwt-auth/v1/token`, {
      username,
      password,
    });
    return res.data.token;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

export const getData = async (token, endpoint) => {
  try {
    const res = await axios.get(`/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (token, endpoint, data) => {
  try {
    const isFormData = data instanceof FormData;

    const headers = {
      Authorization: `Bearer ${token}`,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    };

    const res = await axios.post(`/${endpoint}`, data, { headers });
    return res.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
