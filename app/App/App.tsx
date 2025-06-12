import Aside from '../components/Aside/Aside';
import Dashboard from '../components/Dashboard/Dashboard';
import  styles from  './App.module.css';

export default function App () {
    return (
        <main className={styles.mainContianer}>
            <Aside/>
            <Dashboard/>
        </main>
    )
}