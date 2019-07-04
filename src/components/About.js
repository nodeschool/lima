import React from 'react';
import Section from './Section';
import photo from '../img/limajs-grupo-sept-2018.jpg';


const styles = {
  root: {
    maxWidth: 700,
    margin: '0 auto',
    padding: '80px 30px',
  },
  photo: {
    width: '100%',
    borderRadius: 5,
  },
};


const About = () => (
  <Section style={styles.root} className="about">
    <img style={styles.photo} src={photo} alt="LimaJS Sept 2018 @ Laboratoria" />
    <p>
      ¿Quieres aprender a programar pero no sabes por dónde empezar? ¿O tal vez
      ya programas y quieres aprender más de <strong>JavaScript</strong> y&nbsp;
      <strong>Node</strong>?
    </p>
    <p>
      Ven y únete a los talleres de <a href="https://nodeschool.io/">NodeSchool</a>,
      una iniciativa de comunidad para promover el aprendizaje de&nbsp;
      <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a>&nbsp;
      y <a href="https://nodejs.org/">Node.js</a>. Usamos el&nbsp;
      <a href="https://nodeschool.io/es/#workshopper-list">material de la
      comunidad de NodeSchool</a> y contamos con mentores para acompañar a los
      asistentes durante los talleres, que son 100% prácticos.
    </p>
    <p>
      Los talleres son <strong>gratuitos</strong> y es necesario registrarse (en
      el evento de meetup.com que corresponda) ya que la disponibilidad es
      limitada.
    </p>
  </Section>
);


export default About;
