import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <div className={styles.detailes}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>Rp {product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
