import Card from "./Card";
import React from "react";
import styles from "./SectionCard.module.css";

const SectionCard = (props) => {
  const { title } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl="/static/dog.jpg" size="large"></Card>
      </div>
    </section>
  );
};

export default SectionCard;
