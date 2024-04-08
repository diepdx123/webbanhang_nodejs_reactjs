import { IProduct } from "@/interfaces/product";
import { getAllProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

const New = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: getAllProducts,
  });

  if (isLoading) return <p>loading.....</p>;

  if (isError) return <p>error</p>;

  return (
    <section className="news">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">New</h2>
        </div>
        <div className="section-body">
          <div className="product-list">
            {products?.map((product: IProduct, index: number) => {
              return (
                <div key={index} className="product-item">
                  <div className="product-image">
                    <img
                      src={product?.image}
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-sale">{product?.discount}%</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        {product?.name}
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Stylish cafe chair
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">
                        {product?.price -
                          product?.price * (product?.discount / 100)}
                      </span>
                      <span className="product-price__old">
                        {product?.price}
                      </span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <button className="btn product-action__quickview">
                      Quick View
                    </button>
                    <button className="btn product-action__addtocart">
                      Add To Cart
                    </button>
                    <div className="product-actions-more">
                      <span className="product-action__share">Share</span>
                      <span className="product-action__compare">Compare</span>
                      <span className="product-action__like">Like</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default New;
