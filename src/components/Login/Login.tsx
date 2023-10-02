import React, { useState } from "react";
import "./styles.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // API call to authenticate user

    console.log({ email, password, stayLoggedIn });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <label>
          Stay logged in:
          <input
            type="checkbox"
            name="stayLoggedIn"
            checked={stayLoggedIn}
            onChange={(event) => setStayLoggedIn(event.target.checked)}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
