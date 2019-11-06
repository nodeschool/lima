import React from 'react';


const styles = {
  root: {
    padding: '100px 10px',
  },
  inner: {
    maxWidth: 960,
    margin: '0 auto',
  },
};


const Section = ({ title, children, style, className, id }) => (
  <section
    className={className || ''}
    style={{
      ...styles.root,
      ...(style || {}),
    }}
    id={id || ''}
  >
    <div style={styles.inner}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  </section>
);


export default Section;
