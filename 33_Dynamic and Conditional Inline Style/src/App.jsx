import { useState } from 'react'

function App() {
  const [cardStyle, setCardStyle] = useState( {
              border: '2px solid black',
              width: '400px',
              height: '400px',
              margin: '30px auto',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            });
  const updateTheme = (bgColor, textColor) => {
    setCardStyle({...cardStyle, backgroundColor: bgColor, color: textColor}); 
  }   
  const [grid, setGrid] = useState(true);       
  return (
    <>
     {/* If we do the inline styles with Regular Expression, then we will face issues with syntax
     like- Uncaught Error: The `style` prop expects a mapping from style properties to values */ }
      {/* <h1 style= "color: blue; background-color: red;"> This is a dev with inline styles App</h1> */}
      {/* So, we have to use the style attribute with an object and camelCase for the properties */}
          <h1
            style={{
              color: 'blue',
              backgroundColor: 'red',
              width: '100%',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            This is a div with inline styles
          </h1> 
          <button onClick={() => updateTheme('gray','black')}> Change to Gray </button>
          <button onClick={() => updateTheme('white','blue')}> Change to White </button>
          <button onClick={() => setGrid(!grid)}> Toggle Grid</button>
          <div style={{display: grid? 'flex':'block', flexWrap: 'wrap', justifyContent: 'center'}}>
                <div style={ cardStyle}>
                  <img style ={{ width: '300px', height: '200px' }} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Paris" />
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <h2>Paris</h2>
                    <p>Paris is the capital city of France, known for its art, culture, and history. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p>
                  </div>
                </div>

                <div style={ cardStyle}>
                  <img style ={{ width: '300px', height: '200px' }} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Paris" />
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <h2>Paris</h2>
                    <p>Paris is the capital city of France, known for its art, culture, and history. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p>
                  </div>
                </div>

                <div style={ cardStyle}>
                  <img style ={{ width: '300px', height: '200px' }} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Paris" />
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <h2>Paris</h2>
                    <p>Paris is the capital city of France, known for its art, culture, and history. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p>
                  </div>
                </div>

                <div style={ cardStyle}>
                  <img style ={{ width: '300px', height: '200px' }} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Paris" />
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <h2>Paris</h2>
                    <p>Paris is the capital city of France, known for its art, culture, and history. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p>
                  </div>
                </div>

                <div style={ cardStyle}>
                  <img style ={{ width: '300px', height: '200px' }} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Paris" />
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <h2>Paris</h2>
                    <p>Paris is the capital city of France, known for its art, culture, and history. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p>
                  </div>
                </div>

                <div style={ cardStyle}>
                  <img style ={{ width: '300px', height: '200px' }} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Paris" />
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <h2>Paris</h2>
                    <p>Paris is the capital city of France, known for its art, culture, and history. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p>
                  </div>
                </div>

                <div style={ cardStyle}>
                  <img style ={{ width: '300px', height: '200px' }} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Paris" />
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <h2>Paris</h2>
                    <p>Paris is the capital city of France, known for its art, culture, and history. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p>
                  </div>
                </div>

          </div>
          
     </>
  )
}

export default App
