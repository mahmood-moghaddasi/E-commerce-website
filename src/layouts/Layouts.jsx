import Footer from "../components/Footer";
import Header from "../components/Header";

function Layouts({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layouts;
