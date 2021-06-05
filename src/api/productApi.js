import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/Products";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/Products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
