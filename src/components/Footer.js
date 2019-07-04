import React from 'react';
import Section from './Section';


const styles = {
  root: {
    backgroundColor: '#000',
  },
};


const Footer = props => (
  <Section style={styles.root}>
    <a href="http://es.confcodeofconduct.com/">Código de conducta</a>
  </Section>
);


export default Footer;
