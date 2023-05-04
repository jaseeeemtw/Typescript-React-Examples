//when initial state value type is different from the normal value

import { useState } from "react";

type UserDetails = {
  name: string;
  email: string;
};

function User() {
  //incase we know that user can never be null, we can assert the initial value using the 'as' keyword. this would help use to remove the '?' in 'user?.name'. this is known as type assertion.
  const [user, setUser] = useState<UserDetails>({} as UserDetails);

  //   const [user, setUser] = useState<UserDetails | null>(null);

  const handleLogin = () => {
    setUser({ name: "my name", email: "myemail@example.com" });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      {/* <button onClick={handleLogout}>logout</button> */}

      <h3>The user name is: {user.name}</h3>
      <h3>The user email is: {user.email}</h3>
    </div>
  );
}

export default User;
