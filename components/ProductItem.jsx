import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addShopping } from "../store/shopping/action";

const ProductItem = (props) => {
  const {
    data: { id, name, price, image },
    addShopping,
  } = props;
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} height="540" width="540" />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={() => addShopping(props.data)}>Add to card</button>
    </div>
  );
};

const mapDispatchTopProps = (dispatch) => {
  return {
    addShopping: bindActionCreators(addShopping, dispatch),
  };
};

export default connect(null, mapDispatchTopProps)(ProductItem);
