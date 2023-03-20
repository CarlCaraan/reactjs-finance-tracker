import React, { useState } from "react";

// Custom Hook
import { useSignup } from "../../hooks/useSignup";

// Styles
import styles from "./Signup.module.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Sign Up</h2>

      <label>
        <span>Display Name:</span>
        <input
          type="text"
          id="name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          placeholder="Display Name"
          autoComplete="true"
          autoFocus
          required
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email Address"
          autoComplete="true"
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
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Signup;
