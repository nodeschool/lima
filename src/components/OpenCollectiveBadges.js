import React from 'react';


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  img: {
    margin: '5px 0',
  },
};


const OpenCollectiveBadges = () => (
  <div style={styles.root}>
    <div>
      <img
        style={styles.img}
        alt="Platinum Sponsor"
        src="https://opencollective.com/limajs/tiers/nodeschool-platinum-sponsor-2018/badge.svg?label=NodeSchool%20Platinum%20Sponsor%202018&color=brightgreen"
      />
    </div>
    <div>
      <img
        style={styles.img}
        alt="Gold Sponsor"
        src="https://opencollective.com/limajs/tiers/nodeschool-gold-sponsor-2018/badge.svg?label=NodeSchool%20Gold%20Sponsor%202018&color=brightgreen"
      />
    </div>
    <div>
      <img
        style={styles.img}
        alt="Regular Sponsor"
        src="https://opencollective.com/limajs/tiers/nodeschool-sponsor-2018/badge.svg?label=NodeSchool%20Sponsor%202018&color=brightgreen"
      />
    </div>
  </div>
);


export default OpenCollectiveBadges;
