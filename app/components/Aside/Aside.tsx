import {
  CalendarOutlined,
  CheckOutlined,
  DeleteOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Buttons from "../Buttons/Buttons";
import styles from "./Aside.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Buttons
        title="Home"
        className={styles.iconBtn}
        icon={<HomeOutlined className={styles.icon} />}
      />
      <Buttons
        title="Tasks"
        className={styles.iconBtn}
        icon={<CheckOutlined className={styles.icon} />}
      />
      <Buttons
        title="Events"
        className={styles.iconBtn}
        icon={<CalendarOutlined className={styles.icon} />}
      />
      <Buttons
        title="Trash"
        className={styles.iconBtn}
        icon={<DeleteOutlined className={styles.icon} />}
      />
      <Buttons
        title="Users"
        className={styles.iconBtn}
        icon={<UsergroupAddOutlined className={styles.icon} />}
      />
    </aside>
  );
}
