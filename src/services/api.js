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
    console.log(error);
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
    console.log(error);
  }
};
