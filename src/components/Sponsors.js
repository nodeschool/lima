import React from 'react';
import Section from './Section';
import Sponsor from './Sponsor';
// import OpenCollectiveBadges from './OpenCollectiveBadges';
import sponsors from '../data/sponsors';


const styles = {
  root: {
    color: '#f0f0f0',
    backgroundColor: '#222',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  p: {
    maxWidth: 400,
    margin: '30px auto 10px',
    fontSize: '0.85em',
  },
};


const Sponsors = props => (
  <Section title="Sponsors" style={styles.root}>
    <div style={styles.inner}>
      {sponsors.map(sponsor => (
        <Sponsor key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
    <p style={styles.p}>
      ¿Quieres que tu empresa u organización patrocine estos eventos?&nbsp;
      <a href="https://opencollective.com/limajs">
        Acá puedes ver cómo participar como sponsor
      </a>.
    </p>
    {/* <OpenCollectiveBadges /> */}
  </Section>
);


export default Sponsors;
