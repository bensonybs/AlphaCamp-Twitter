import axios from "axios";

const FOLLOW_URL = "https://twitter-api-trww6pqemq-de.a.run.app/api/followships";
// const FOLLOW_URL = "https://shielded-brook-33484.herokuapp.com/api/followships";

const axiosInstance = axios.create({ baseURL: FOLLOW_URL });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export const postFollow = async (id) => {
  try {
    const res = await axiosInstance.post(`${FOLLOW_URL}`, { id });
    return res.data.status;
  } catch (error) {
    console.error("[Follow Failed]: ", error);
  }
};

export const deleteFollow = async (id) => {
  try {
    const res = await axiosInstance.delete(`${FOLLOW_URL}/${id}`, { id });
    return res.data.status;
  } catch (error) {
    console.error("[Unfollow Failed]: ", error);
  }
};
