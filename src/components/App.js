
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
          
          <div className="parent">
            <h1>Parent Component</h1>
            {isLoggedIn && ("You are logged in!")}
          </div>
        {
          isLoggedIn===false &&
          <div className="child">
            <label htmlFor="">Username: </label>
            <input type="text" /><br /><br />
            <label htmlFor="">Password: </label>
            <input type="text" /><br /><br />
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
          </div>
        }
    </div>
  )
}

export default App
