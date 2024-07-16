import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ProductCategory from "./component/ProductCategory";
import Products from "./component/Products";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        margin: "0",
        padding: "0",
      }}
    >
      <Navbar />
      <Home />
      <Products
        heading="Supplements to improve"
        subHeading="Mental health and Focus"
      />
      <Products
        heading="Supplements to improve"
        subHeading="Skin, Hair, and Nail Health"
      />
      <Testimonial />
      <Products
        heading="Supplements to improve"
        subHeading="Sleep and Relaxation"
      />
      <Products
        heading="Supplements to improve"
        subHeading="Digestive Health"
      />
      <Products
        heading="Supplements to improve"
        subHeading="changes require!!!!!!!!!"
      />
      <Products
        heading="Supplements to improve"
        subHeading="Energy and Vitality"
      />
      <Products heading="Supplements to improve" subHeading="Heart Health" />
      <Footer />
      {/* <ProductCategory /> */}
    </div>
  );
}

export default App;
