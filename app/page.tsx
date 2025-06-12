import Image from "next/image";
import styles from "./page.module.css";
import App from "./App/App";

export default function Home() {
  return (
       <div className={styles.contianer}>
        <App/>
       </div>
  );
}
