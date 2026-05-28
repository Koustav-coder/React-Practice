import { useState } from "react";
function  App(){
  const [gender, setGender] = useState('male');
  const [country, setCountry] = useState('usa');
  return (
    <div>
      <h1>Handle Radio Buttons and Dropdowns</h1>
      <h4> Select Gender </h4>
      <input type = "radio" onChange={(e) => setGender(e.target.value)} name = "gender" id = "male" checked={gender === 'male'} value = "male"/> 
      <label htmlFor = "male">Male</label>
      <input type = "radio" onChange={(e) => setGender(e.target.value)} name = "gender" id = "female" checked={gender === 'female'} value = "female"/> 
      <label htmlFor = "female">Female</label>
      <h2>Selected Gender: {gender}</h2>
      <br /> <br />
      <h4> Select Country </h4>
      <select onChange={(e) => setCountry(e.target.value)} name = "country" id = "country" defaultValue={"usa"}>
        <option value = "usa">USA</option>
        <option value = "canada">Canada</option>
        <option value = "mexico">Mexico</option>
      </select>
      <h2>Selected Country: {country}</h2>
    </div>
  )
}

export default App;