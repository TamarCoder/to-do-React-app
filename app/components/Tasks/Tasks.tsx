"use client";
import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";
import styles from "./Tasks.module.css";
import { useEffect, useState } from "react";

type TasksProps = {
  taskText: string;
};

export default function Tasks({ taskText }: TasksProps) {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    setBgColor(randomColor);
  }, []);

  return (
    <div
      className={styles.task}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.taskWeek}>
        <div className={styles.days}>
          <CalendarOutlined />
          <p>Monday</p>
        </div>
         <button className={styles.nextBtn}>
            <ArrowRightOutlined />
         </button>
      </div>
      <div className={styles.taskText}>
        <p>{taskText}</p>
      </div>
    </div>
  );
}
