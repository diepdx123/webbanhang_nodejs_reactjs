import "./App.css";

function App() {
  return (
    <>
      <div>
        <header className="header">
          <div className="container">
            <div className="header-inner">
              <a href="#" className="header__logo">
                <img src="./assets/logo.svg" alt="#" />
              </a>
              <div className="button-mobile">
                <button>=</button>
              </div>
              <nav className="main-menu">
                <ul className="main-menu__list">
                  <li className="main-menu__item">
                    <a href="#" className="main-menu__link">
                      Home
                    </a>
                  </li>
                  <li className="main-menu__item">
                    <a href="./shop.html" className="main-menu__link">
                      Shop
                    </a>
                  </li>
                  <li className="main-menu__item">
                    <a href="#" className="main-menu__link">
                      About
                    </a>
                  </li>
                  <li className="main-menu__item">
                    <a href="#" className="main-menu__link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header-items">
                <div className="header-item-user">
                  <span>
                    <img src="./assets/icons/1.svg" />
                  </span>
                </div>
                <div className="header-item-user">
                  <span>
                    <img src="./assets/icons/2.svg" />
                  </span>
                </div>
                <div className="header-item-user">
                  <span>
                    <img src="./assets/icons/3.svg" />
                  </span>
                </div>
                <div className="header-item-user">
                  <span>
                    <img src="./assets/icons/4.svg" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="banner">
          <img
            src="https://picsum.photos/id/10/1440/500"
            alt="#"
            className="banner__img"
          />
        </section>
        {/*End .banner*/}
        <section className="news">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-heading__title">New</h2>
            </div>
            <div className="section-body">
              <div className="product-list">
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/10/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-sale">30%</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        Syltherine
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Stylish cafe chair
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">$200</span>
                      <span className="product-price__old">$300</span>
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
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/10/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                    <span className="product-new">New</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        Syltherine
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Stylish cafe chair
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">$200</span>
                      <span className="product-price__old">$300</span>
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
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/10/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        Syltherine
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Stylish cafe chair
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">$200</span>
                      <span className="product-price__old">$300</span>
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
                {/*End .product-item*/}
                <div className="product-item">
                  <div className="product-image">
                    <img
                      src="https://picsum.photos/id/10/300/300"
                      alt="#"
                      className="product__thumbnail"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product__name">
                      <a href="#" className="product__link">
                        Syltherine
                      </a>
                    </h3>
                    <a href="#" className="product__category">
                      Stylish cafe chair
                    </a>
                    <div className="product-price">
                      <span className="product-price__new">500.000</span>
                      <span className="product-price__old">$300</span>
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
                {/*End .product-item*/}
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr />
        </div>
        {/*End .news*/}
        <section className="shop">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-heading__title">Shop</h2>
            </div>
            <div className="section-body">
              <div className="shops">
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img
                      src="https://picsum.photos/id/12/665/500"
                      alt="#"
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img
                      src="https://picsum.photos/id/13/665/500"
                      alt="#"
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img
                      src="https://picsum.photos/id/14/665/500"
                      alt="#"
                      className="shop__image"
                    />
                  </a>
                </div>
                <div className="shop-item">
                  <a href="#" className="shop__link">
                    <img
                      src="https://picsum.photos/id/15/665/500"
                      alt="#"
                      className="shop__image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End .shop*/}
        <section className="blog">
          <div className="container">
            <div className="section-heading section-blog-heading">
              <h2 className="section-heading__title">Blog</h2>
            </div>
            <div className="section-body">
              <div className="post-list">
                <div className="post-item">
                  <div className="post-image">
                    <a href="#">
                      <img
                        src="https://picsum.photos/id/16/665/250"
                        alt="#"
                        className="post__thumbnail"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h3 className="post__title">
                      <a href="#" className="post__link">
                        THE ULTIMATE SOFA BUYING GUIDE
                      </a>
                    </h3>
                    <p className="post__excerpt">
                      The versatility of our living space is more crucial than
                      ever. But buying a sofa might be a difficult undertaking.
                      Your needs and the size of your living area will determine
                      everything, However, don’t worry, were are here to help
                      you
                    </p>
                    <a href="#" className="post__readmore">
                      Readmore
                    </a>
                  </div>
                </div>
                {/*End .post-item*/}
                <div className="post-item">
                  <div className="post-image">
                    <a href="#">
                      <img
                        src="https://picsum.photos/id/17/665/250"
                        alt="#"
                        className="post__thumbnail"
                      />
                    </a>
                  </div>
                  <div className="post-info">
                    <h3 className="post__title">
                      <a href="#" className="post__link">
                        THE ULTIMATE SOFA BUYING GUIDE
                      </a>
                    </h3>
                    <p className="post__excerpt">
                      The versatility of our living space is more crucial than
                      ever. But buying a sofa might be a difficult undertaking.
                      Your needs and the size of your living area will determine
                      everything, However, don’t worry, were are here to help
                      you
                    </p>
                    <a href="#" className="post__readmore">
                      Readmore
                    </a>
                  </div>
                </div>
                {/*End .post-item*/}
              </div>
            </div>
          </div>
        </section>
        {/*End .blog*/}
        <section className="services">
          <div className="container-fluid">
            <div className="service-list">
              <div className="service-item">
                <img src="./assets/icons/10.svg" className="service__image" />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img src="./assets/icons/11.svg" className="service__image" />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img src="./assets/icons/12.svg" className="service__image" />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
              <div className="service-item">
                <img src="./assets/icons/13.svg" className="service__image" />
                <div className="service-info">
                  <h4 className="service__name">High Quality</h4>
                  <p className="service__description">
                    crafted from top materials
                  </p>
                </div>
              </div>
              {/*End service-item*/}
            </div>
          </div>
        </section>
        {/*End .services*/}
        <footer className="footer">
          <div className="container">
            <div className="footer-list">
              <div className="footer-item">
                <img src="./assets/logo.svg" alt="#" />
                <p className="footer__address">
                  400 University Drive Suite 200 Coral Gables, FL 33134 USA
                </p>
              </div>
              <div className="footer-nav">
                <div className="footer-item">
                  <h2 className="footer__title">Links</h2>
                  <ul className="footer-menu-list">
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Home
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Shop
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Blog
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-item">
                  <h2 className="footer__title">Help</h2>
                  <ul className="footer-menu-list">
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Payment Options
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Returns
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Privacy Policies
                      </a>
                    </li>
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-item">
                <h2 className="footer__title">Newsletter</h2>
                <form className="newsletter">
                  <input
                    type="text"
                    className="newsletter__input"
                    placeholder="Enter Your Email Address"
                  />
                  <button className="newsletter__btn">Subscribe</button>
                </form>
              </div>
            </div>
            <p className="copyright">2023 furino. All rights reverved</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default App;
