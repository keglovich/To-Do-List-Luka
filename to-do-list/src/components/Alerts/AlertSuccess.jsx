import React from "react";
import styles from "./alertStyles.module.css";
import checkMark from "../../assets/checkmark.svg";

function AlertSuccess() {
  return (
    <>
      <div className={styles.success}>
        <img src={checkMark} alt="checkmark icon" />
        <h1>Success</h1>
      </div>
    </>
  );
}

export default AlertSuccess;
