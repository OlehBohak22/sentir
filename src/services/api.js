import axios from "axios";

const API_URL = "https://www.sentir.projection-learn.website";

export const login = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/wp-json/jwt-auth/v1/token`, {
      username,
      password,
    });
    return res.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (token, endpoint) => {
  try {
    const res = await axios.get(`${API_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
