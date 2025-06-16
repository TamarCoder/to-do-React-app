"use client";
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import TasksMenegment from '../TasksMenegment/TasksMenegment';
import styles from './Dashboard.module.css';

export default function Dashboard () {
  const [count, setCount] = useState(0); //Task counter state
  const [taskText, setTaskText] = useState<string[]>([]);  // Task text state
  const [showTask, setShowTask] = useState(false); //  Task visibility state initially not false

  // Task funqtion. 
  const AddTask = (text: string) => {
    setTaskText(prev => [...prev, text]); 
    setShowTask(true); 
    setCount(prev => prev + 1); 
  };

  return (
    <main className={styles.mainContianer}>
      <Header />
      <Banner onAddTask={AddTask} />
      <TasksMenegment showTask={showTask} count={count} taskTexts={taskText} />
    </main>
  );
}