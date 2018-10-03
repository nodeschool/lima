import React from 'react';


const styles = {
  root: {
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
};


const Sponsor = ({ sponsor }) => (
  <a href={sponsor.link} style={styles.root}>
    <img src={sponsor.photoURL} alt={sponsor.id} style={styles.avatar} />
    <div>{sponsor.id}</div>
  </a>
);


export default Sponsor;
