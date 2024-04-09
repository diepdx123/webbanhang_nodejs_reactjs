import { getProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => {
      return await getProductById(id as string);
    },
  });

  if (isLoading) return <p>Loading...</p>;
  return <div>{data?.name}</div>;
};
export default DetailProduct;
