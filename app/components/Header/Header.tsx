"use client";
import dayjs from "dayjs";
import Buttons from "../Buttons/Buttons";
import styles from "./Header.module.css";
import { DatePicker } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export default function Header() {
  const dateFormat = "YYYY-MM-DD";

  return (
    <header className={styles.header}>
      <section className={styles.cover}>
        <div className={styles.left}>
          <p className={styles.text}>Projects / quck project</p>
          <h1 className={styles.heading}>Quickt Project</h1>
        </div>
        <div className={styles.right}>
          <span className={styles.span}> Customer : Tamar Khsukivadze</span>
        </div>
      </section>

      <section className={styles.btnSection}>
        <div className={styles.content}>
          <div className={styles.priority}>
            <span className={styles.title}>Priority</span>
            <Buttons title="Hight" className={styles.btn} />
          </div>
          <div className={styles.data}>
            <span className={styles.titleData}>Start Data</span>

            <DatePicker
              style={{
                backgroundColor: "#4d52b0",
                borderRadius: "8px",
                border: "none",
                color: "white",
              }}
              defaultValue={dayjs("2019-09-03", dateFormat)}
              minDate={dayjs("2019-08-01", dateFormat)}
              maxDate={dayjs("2020-10-31", dateFormat)}
            />
          </div>
          <div className={styles.data}>
            <span className={styles.titleData}>End Data</span>

            <DatePicker
              style={{
                backgroundColor: "#4d52b0",
                borderRadius: "8px",
                border: "none",
                color: "white",
              }}
              defaultValue={dayjs("2019-09-03", dateFormat)}
              minDate={dayjs("2019-08-01", dateFormat)}
              maxDate={dayjs("2020-10-31", dateFormat)}
            />
          </div>

          <div className={styles.category}>
            <span className={styles.spans}>Tags</span>

            <div className={styles.categoryCont}>
              <Buttons title="Resarche" className={styles.resarche} />
              <Buttons title="Desing" className={styles.desing} />
              <Buttons title="Development" className={styles.dev} />
              <Buttons title="Other" className={styles.other} />
            </div>
          </div>
        </div>
      </section>
      
    </header>
  );
}
