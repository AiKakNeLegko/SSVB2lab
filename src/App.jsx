// src/App.jsx
import React from "react";

function App() {
  return (
    <div>
      <Navigation />
      <Container />
    </div>
  );
}

export default App;

function Navigation() {
  return (
    <nav style={{ backgroundColor: "whitesmoke" , padding: "10px", color: "white" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><a href="#" style={{background: "white", textDecoration: "none"}}>Home</a></li>
        <li><a href="#" style={{background: "white", textDecoration: "none"}}>About</a></li>
        <li><a href="#" style={{background: "white", textDecoration: "none"}}>Content</a></li>
      </ul>
    </nav>
  );
}

function Container() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Hello World</h1>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <button style={{ padding: "10px 20px", fontSize: "16px" }} onClick={() => alert("hello world!")}> 
      Click Me
    </button>
  );
}
