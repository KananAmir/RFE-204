import React, { useState, ChangeEvent, FormEvent } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value !== "") {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isError = false;
    if (username === "") {
      setUsernameError("Username is required");
      isError = true;
    }
    if (password === "") {
      setPasswordError("Password is required");
      isError = true;
    }

    if (!isError) {
      console.log("Login successful");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        {usernameError && <div style={{ color: "red" }}>{usernameError}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
