import React from 'react';
import './index.css';

function Typography({ variant, children }) {
  const classes = `typography ${variant}`;
  return <div className={classes}>{children}</div>;
}

export default Typography;
