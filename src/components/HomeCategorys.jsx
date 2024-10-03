import styles from "./HomeCategorys.module.css";

function HomeCategorys() {
  const categorys = [
    {
      image: "../../public/images/Dining-category.jpg",
      title: "Dining",
    },
    {
      image: "../../public/images/Living-category.jpg",
      title: "Living",
    },
    {
      image: "../../public/images/Bedroom-category.jpg",
      title: "Bedroom",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Browse The Range</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className={styles.cards}>
        {categorys.map((category, index) => (
          <div key={index} className={styles.card}>
            <img src={category.image} alt="" />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCategorys;
