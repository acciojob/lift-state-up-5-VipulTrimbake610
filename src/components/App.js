
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        {
          isLoggedIn &&
          <div className="parent">
            You are logged in!
          </div>
        }
        {
          isLoggedIn===false &&
          <div className="child">
            <input type="text" />
            <input type="text" />
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
          </div>
        }
    </div>
  )
}

export default App
