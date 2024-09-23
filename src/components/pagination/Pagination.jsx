
import React from "react";
import styles from "./pagination.module.css";


const Pagination = ({ page, hasPrev, hasNext }) => {
 

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
