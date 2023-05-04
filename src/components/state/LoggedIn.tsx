import { useState } from "react";

function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h3>The user is {isLoggedIn ? "logged in" : "logged out"}</h3>
    </div>
  );
}

export default LoggedIn;
