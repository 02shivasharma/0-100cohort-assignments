

export function BuisnessCard(props){
    const {deatails} = props;
    return <div style={styles.card}>
    <h1 style={styles.name}>{deatails[0].name}</h1>
    <h3 style={styles.description}> {deatails[0].description}</h3>
    
    <h2>Intrests</h2>
      <ul style={styles.interestsList}>
       {
        deatails[0].Intrests.map((int)=>(
            <li key={int} style={styles.interestItem}>{int}</li>
        ))
       }
      </ul>
      <div style={styles.socialLinks}>
      <a  href={props.linkedin} target="_blank" rel="noopener noreferrer" style={{...styles.link, marginLeft: '0px'}}>LinkedIn</a>
      <a  href={props.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter  </a>
      </div>
    </div>
}

  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    },
    name: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
    },
    socialLinks: {
      display: 'flex',
      marginBottom: '15px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff', // Text color
      padding: '10px 15px', // Padding for the button
      borderRadius: '5px', // Border radius for rounded corners
      backgroundColor: '#007BFF', // Background color for the button
      display: 'inline-block', // Display as inline-block to be side by side
      margin: '10px', // Margin between buttons
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
    },
    interestsHeader: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#333',
    },
    interestsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    interestItem: {
      fontSize: '14px',
      marginBottom: '5px',
      color: '#555',
    },
  };