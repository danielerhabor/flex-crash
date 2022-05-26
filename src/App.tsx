import styles from './App.module.css';

const App = () => {
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
    </>
  );
};

export default App;
