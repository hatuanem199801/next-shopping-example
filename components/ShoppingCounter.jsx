import React, { useEffect, useState } from "react";
import { fetchShopping, clearShopping } from "../store/shopping/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ShoppingCounter = ({ shopping, fetchShopping, clear }) => {
  useEffect(() => {
    fetchShopping();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        textAlign: "right",
        marginBottom: "1rem",
      }}
    >
      <h2
        style={{
          padding: "1rem 1.5rem",
          right: "5%",
          top: "5%",
          position: "absolute",
          backgroundColor: "blue",
          color: "white",
          fontWeight: 200,
          borderRadius: "10px",
        }}
      >
        Counter <strong>{shopping}</strong>
        <button
          style={{
            borderRadius: "10px",
            border: "none",
            color: "white",
            background: "orange",
            marginLeft: "1rem",
            padding: "0.6rem 0.8rem",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={clear}
          type="button"
        >
          Clear
        </button>
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = state.shopping.shopping;
  const count =
    data.length &&
    data
      .map((item) => item.quantity)
      .reduce((item, current) => {
        return item + current;
      });
  return {
    shopping: count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShopping: bindActionCreators(fetchShopping, dispatch),
    clear: bindActionCreators(clearShopping, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCounter);
