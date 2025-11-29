import React from "react";

const LoginForm = ({ role, userid, password, setUserid, setPassword, handleLogin }) => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
    <div
      style={{
        background: "#fff",
        padding: 28,
        borderRadius: 12,
        width: 360,
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Login as {role}</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="text"
          placeholder="Username"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
);

export default LoginForm;
