import { useState, useEffect } from "react";


function App() {
  
  const [username, setUsername] = useState("");
  const handleusernameChange = ({ target: { value } }) => setUsername(value);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`User: ${username}`);
  };
  const url = 'https://torre.bio/api/bios/' + username + '/'
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    setUsername(responseJson)
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Start Session</h2>
        <label>
          User Name
          <input type="text" value={username} onChange={handleusernameChange}/>
        </label>
        <button type="submit">
          submit
        </button>
      </form>
      {/* <ul>
        {!username ? 'Loading...' :
          username.map( (username, index)=>{
            return <li>{username.professionalHeadline}</li>
          })
        }
      </ul> */}
    </div>
  );
}

export default App;
