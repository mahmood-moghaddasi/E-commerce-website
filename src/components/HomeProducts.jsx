import styles from "./HomeProducts.module.css";
import ProductCard from "./ProductCard";

function HomeProducts() {
  const products = [
    {
      title: "Syltherine",
      description: "Stylish cafe chair",
      image: "../../public/images/products/sylther-product.png",
      price: "2.500.00",
    },
    {
      title: "Leviosa",
      description: "Stylish cafe chair",
      image: "../../public/images/products/leviosa-product.png",
      price: "2.500.00",
    },
    {
      title: "Lolito",
      description: "Luxury big sofa",
      image: "../../public/images/products/lolito-product.png",
      price: "7.000.000",
    },
    {
      title: "Respira",
      description: "Outdoor bar table and stool",
      image: "../../public/images/products/respira-product.png",
      price: "500.000",
    },
    {
      title: "Grifo",
      description: "Night lamp",
      image: "../../public/images/products/grifo-product.png",
      price: "1.500.000",
    },
    {
      title: "Muggo",
      description: "Luxury small sofa",
      image: "../../public/images/products/Muggo-product.png",
      price: "4.000.000",
    },
    {
      title: "Pingky",
      description: "Luxury big sofa",
      image: "../../public/images/products/pingky-product.png",
      price: "7.000.000",
    },
    {
      title: "Potty",
      description: "Minimall sofa",
      image: "../../public/images/products/potty-product.png",
      price: "2.000.000",
    },
  ];
  return (
    <div className={styles.container}>
      <h1>Our Products</h1>
      <div className={styles.cards}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <button>Show More</button>
    </div>
  );
}

export default HomeProducts;
