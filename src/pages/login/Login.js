import React, { useState } from "react";

// Custom Hook
import { useLogin } from "../../hooks/useLogin";

// Styles
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    login(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>

      <label>
        <span>Email:</span>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email Address"
          autoComplete
          autoFocus
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
