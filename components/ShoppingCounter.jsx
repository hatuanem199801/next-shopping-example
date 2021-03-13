import React, { useEffect, useState } from "react";
import { fetchShopping } from "../store/shopping/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ShoppingCounter = ({ shopping, fetchShopping }) => {
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
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shopping: state.shopping.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShopping: bindActionCreators(fetchShopping, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCounter);
