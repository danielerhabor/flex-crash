import gridImage from './images/grid.svg';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>Flexbox Crash Course</h1>
          <p>
            {' '}
            This crash course was created by Brad Traversy to help you learn the
            basics of flexbox. Flexbox is a very important and useful tool in
            CSS. This crash course was created by Brad Traversy to help you
            learn the basics of flexbox. Flexbox is a very important and useful
            tool in CSS.
          </p>
        </div>
        <img src={gridImage} alt="" />
      </div>
    </header>
  );
};

export default Header;
