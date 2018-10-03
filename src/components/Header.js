import React from 'react';
import logo from '../img/logo.svg';
import bg from '../img/bg.png';


const styles = {
  root: {
    paddingTop: 30,
    backgroundImage: `url(${bg})`,
    backgroundSize: '25%',
    backgroundColor: '#ffe51f',
    backgroundBlendMode: 'multiply',
  },
  logo: {
    width: 300,
  },
};


const Header = () => (
  <header style={styles.root}>
    <img src={logo} style={styles.logo} alt="logo" />
    <h1>NodeSchool Lima</h1>
  </header>
);


export default Header;
