import React from "react";
import styles from "./SidebarStyles.module.css";

function Sidebar() {
  return (
    <>
      <div id="sidebar" className={styles.sideBarContainer}>
        <h1>Task Managment</h1>
        <div className={styles.sideBarTask}>
          <h3>Add new tasks</h3>
          <div className={styles.sideBarComp}>
            <a href="#" className={styles.sideBarButton}>
              Input manually
            </a>
            <a href="#" className={styles.sideBarButton}>
              Input via API
            </a>
          </div>
        </div>
        <div className={styles.sideBarTask}>
          <h3>Delete tasks</h3>
          <div className={styles.sideBarComp}>
            <a href="#" className={styles.sideBarButton}>
              All Tasks
            </a>
            <a href="#" className={styles.sideBarButton}>
              Added manually
            </a>
            <a href="#" className={styles.sideBarButton}>
              Added via API
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
