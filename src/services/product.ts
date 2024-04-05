import instance from "@/configs/axios";

export const getAllProducts = async () => {
  try {
    const response = await instance.get("/products");
    return response.data;
  } catch (error) {
    return error;
  }
};
