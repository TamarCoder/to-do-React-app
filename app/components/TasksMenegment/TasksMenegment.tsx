"use client";
import { useState } from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./TasksMenegment.module.css";
import {
  MessageOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

type TasksMenegmentProps = {
  count: number;
  taskTexts: string[];   
  showTask: boolean;
};

export default function TasksMenegment({
  count,
  taskTexts,
  showTask,
}: TasksMenegmentProps) {

  const [throwTask, setThrouTask] = useState(false); 


  return (
    <section className={styles.container}>

      <div className={styles.toDo}>

        <div className={styles.top}>
          <div className={styles.topLeft}>
            <p>To-Do</p>
            <button className={styles.counter}>{count}</button>
          </div>
          <div className={styles.topRight}>
            <UnorderedListOutlined className={styles.iconBtn} />
            <PlusCircleOutlined className={styles.iconBtn} />
          </div>
        </div>

        <div className={styles.taskcontainer}>
          {showTask &&
            taskTexts.map((task) => (
              <Tasks taskText={task} />
            ))}
        </div>

      </div>

 
      <div className={styles.inProgress}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <p>In progress</p>
            <button className={styles.counter}>0</button>
          </div>
          <div className={styles.topRight}>
            <UnorderedListOutlined className={styles.iconBtn} />
            <PlusCircleOutlined className={styles.iconBtn} />
          </div>
        </div>
        
      </div>

      <div className={styles.done}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <p>Done</p>
            <button className={styles.counter}>0</button>
          </div>
          <div className={styles.topRight}>
            <UnorderedListOutlined className={styles.iconBtn} />
            <PlusCircleOutlined className={styles.iconBtn} />
          </div>
        </div>
      </div>

      <div className={styles.archived}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <p>Archived</p>
            <button className={styles.counter}>0</button>
          </div>
          <div className={styles.topRight}>
            <UnorderedListOutlined className={styles.iconBtn} />
            <PlusCircleOutlined className={styles.iconBtn} />
          </div>
        </div>
      </div>
    </section>
  );
}