import React from 'react';
import Section from './Section';
import mentors from '../data/mentors';


const styles = {
  root: {
    color: '#f0f0f0',
    backgroundColor: '#383632',
  },
  mentors: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  mentor: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginBottom: 10,
  },
  p: {
    maxWidth: 400,
    margin: '30px auto 10px',
    fontSize: '0.85em',
  },
};


const Mentors = props => (
  <Section title="Mentorxs" style={styles.root}>
    <p>Algunxs de lxs mentorxs que han participado en los últimos meses...</p>
    <div style={styles.mentors}>
      {mentors.map(mentor => (
        <a href={`https://github.com/${mentor.id}`} key={mentor.id} style={styles.mentor}>
          <img
            style={styles.avatar}
            src={`https://github.com/${mentor.id}.png?size=200`}
            alt={mentor.id}
          />
          <div>{mentor.id}</div>
        </a>
      ))}
    </div>
    <p style={styles.p}>
      ¿Tienes experiencia con Node.js y JavaScript y te gusta compartir?&nbsp;
      Contáctanos por <a href="https://github.com/nodeschool/lima/issues/new">GitHub</a>&nbsp;
      o el <a href="https://holalimajs.herokuapp.com/">Slack de LimaJS</a> para
      poder contar contigo en el próximo evento.
    </p>
  </Section>
);


export default Mentors;
