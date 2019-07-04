import React from 'react';


const styles = {
  root: {
    border: '1px solid #666',
    borderRadius: 5,
    backgroundColor: '#333',
    padding: 30,
    margin: 10,
    color: '#f0f0f0',
    textAlign: 'left',
  },
  inner: {
    display: 'flex',
  },
  dateBadge: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    padding: '5px 10px',
    marginRight: 10,
    backgroundColor: '#f7df1e',
    color: '#333',
    fontWeight: 'bold',
    borderRadius: 5,
  },
};


const months = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];


const days = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];


const pad = num => `${num < 10 ? '0' : ''}${num}`;


const Event = ({ event }) => {
  const date = new Date(event.time);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const dayOfTheWeek = days[date.getDay()];
  const endDate = new Date(+date + event.duration);
  const endTime = `${pad(endDate.getHours())}:${pad(endDate.getMinutes())}`;

  return (
    <div style={styles.root}>
      <div style={styles.inner}>
        <div style={styles.dateBadge}>
          <div>{date.getDate()}</div>
          <div>{month}</div>
        </div>
        <div>
          <a href={event.link}>{event.name}</a>
          <div style={{ fontSize: '0.8em' }}>
            {`${dayOfTheWeek}, ${date.getDate()} de ${month} ${year}, de ${event.local_time}h a ${endTime}h`}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Event;
