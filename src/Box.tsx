import React, { FC, ReactNode } from 'react';

import styles from './Box.module.css';

const Box: FC<{ classList: string; children: ReactNode; iconText: string }> = ({
  children,
  classList,
  iconText,
}) => {
  return (
    <div className={styles.box}>
      <h2>
        {/* Will use composes: faArrowsAltV in the fas class css */}
        <i className={`${classList}`}></i>
        {iconText}
      </h2>
      <p>{children}</p>
    </div>
  );
};

export default Box;
