const User = ({props}) => {
  return (
    <div style={{ 
        border: '1px solid black', 
        padding: '10px', margin: '10px' ,
        borderRadius: '5px',
        backgroundColor: '#f0f0f0' }}>

        <h2>Name: <span style={{ fontWeight: 'bold', color: 'blue' }}>{props.name}</span></h2>
        <h2>ID: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.id}</span></h2>
        
    </div>
  )
}
export default User;