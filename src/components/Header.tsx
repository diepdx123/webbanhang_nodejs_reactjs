import Logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header__logo">
            <img src={Logo} alt="#" />
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
  );
};

export default Header;
