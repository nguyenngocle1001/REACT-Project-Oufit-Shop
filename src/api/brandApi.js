import axiosClient from "./axiosClient";

const brandApi = {
  getAll: () => {
    const url = "/Brands";
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/Brands/${id}`;
    return axiosClient.get(url);
  },
};

export default brandApi;
