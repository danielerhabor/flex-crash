import Box from './Box';

import styles from './Boxes.module.css';

const Boxes = () => {
  return (
    <section className={styles.boxes}>
      <div className={styles.container}>
        <Box iconText={'Alignment & Space'} classList={`fas fa-arrows-alt-v`}>
          A more efficient way to lay out, align and distribute space among
          items in a container
        </Box>
        <Box iconText={'Tricky Positioning'} classList={`fas fa-arrows-alt`}>
          Flexbox usually solves tricky problems including how to position or
          dynamically resize elements on a page
        </Box>
        <Box iconText={'Responsive Design'} classList={`fas fa-mobile`}>
          Flexbox makes building a website layout (and making it responsive!)
          much, much easier
        </Box>
      </div>
    </section>
  );
};

export default Boxes;
