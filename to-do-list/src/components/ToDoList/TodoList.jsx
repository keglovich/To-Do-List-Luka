import React from "react";
import styles from "./TodoListStyles.module.css";
import checkMark from "../../assets/checkmark.svg";

function TodoList() {
  return (
    <>
      <div id="main-list">
        <h1>To Do List</h1>
        <div className={styles.listContainer}>
          <div className={styles.wrapper}>
            <div className={styles.listNav}>
              <h3>My List</h3>
              <a href="#" className={styles.listNavItem}>
                Tasks
              </a>
              <a href="#" className={styles.listNavItem}>
                Completed
              </a>
              <a href="#" className={styles.listNavItem}>
                Deleted
              </a>
            </div>
            <hr />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.listNav}>
              <h3>API List</h3>
              <a href="#" className={styles.listNavItem}>
                Tasks
              </a>
              <a href="#" className={styles.listNavItem}>
                Completed
              </a>
              <a href="#" className={styles.listNavItem}>
                Deleted
              </a>
            </div>
            <hr />
          </div>
          <div className={styles.alert}></div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
