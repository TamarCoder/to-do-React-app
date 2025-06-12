import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import styles from './Tasks.module.css';


type TasksProps = {
  taskText: string;
};

export default function Tasks ({ taskText }: TasksProps) {
    return (
        <div className={styles.task}>
            <div className={styles.taskWeek}>
                <div className={styles.days}>
                    <CalendarOutlined />
                    <p>Monday</p>
                </div>
                <ArrowRightOutlined />
            </div>
            <div className={styles.taskText}>
                 <p>{taskText}</p>
            </div>
        </div>
    )
}