"use client";

import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Buttons from "../Buttons/Buttons";
import styles from "./Banner.module.css";
import { useState } from "react";

type BannerProps = {
  onAddTask: (text: string) => void;
};

export default function Banner({ onAddTask }: BannerProps) {
  const [textInput, setTextInput] = useState(""); //inmputTex state

 //A function that responds to text changes in the input field
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };
 //A function that runs on button click
  const onClick = () => {
    if (textInput.trim() === "") return;
    onAddTask(textInput);
    setTextInput("");
  };

  return (
    <section className={styles.banner}>
      <div className={styles.TasksContainer}>
        <input
          type="text"
          className={styles.inputText}
          placeholder="Enter New Tasks........."
          value={textInput}
          onChange={onChange}  
        />
        <Buttons
          onClick={onClick}
          icon={<PlusCircleOutlined className={styles.icon} />}
          title="Add Tasks"
          className={styles.counterBtn}
        />
      </div>
      <div className={styles.SearchContainer}>
        <form className={styles.searchInput}>
          <SearchOutlined className={styles.searchIcon} />
          <input
            type="search"
            placeholder="type for search"
            className={styles.search}
          />
        </form>
      </div>
    </section>
  );
}