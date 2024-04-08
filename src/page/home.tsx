import {
  Banner,
  Blog,
  Footer,
  Header,
  New,
  Services,
  Shop,
} from "@/components";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <New />
      <div className="container">
        <hr />
      </div>
      <Shop />
      <Blog />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;
