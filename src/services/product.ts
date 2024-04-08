import instance from "@/configs/axios";
import { IProduct } from "@/interfaces/product";

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await instance.get("/products");
    return response.data;
  } catch (error) {
    console.log(error as Error);
    return [];
  }
};
