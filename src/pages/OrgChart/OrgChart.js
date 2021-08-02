import React from "react";
import styles from "./OrgChart.module.scss";

const OrgChart = ({ obj }) => {
  return (
    <div className={styles["org-chart"]}>
      <ul>
        <li>
          <div className={styles["node-container"]}>
            <div className={styles["container-info"]}>
              <h4>{obj.title}</h4>
            </div>
            <div className={styles["container-img"]}>
              <img src={`${obj.picture}`}></img>
            </div>
            <div className={styles["container-info"]}>
              <span>
                <strong>{obj.name}</strong>
              </span>
              <span>
                <strong>
                  <small>{"ID: " + obj.id}</small>
                </strong>
              </span>
            </div>
          </div>
          <ul>
            {obj.subItems.map((item, i) => (
              <OrgChart obj={item}></OrgChart>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default OrgChart;
