import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import classNames from "classnames";
import { useState } from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856",
    size = "medium",
  } = props;

  const [imgSrc, setImageSource] = useState(imgUrl);
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  const handleOnError = () => {
    console.log();
    setImageSource(
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856"
    );
  };

  return (
    <div
      className={styles.container}>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {duration:0.2}
        }}
        onHoverStart={e => { }}
        onHoverEnd = {e =>{}}
        whileTap= {{scale: 0.9}}
        className={classNames(styles.imgMotionWrapper,classMap[size])}>
        <Image
          className={styles.cardImg}
          src={imgSrc}
          alt="imge of the video"
          layout="fill"
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};

export default Card;

      