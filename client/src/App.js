import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const sayHello = async () => {
    const res = await fetch("http://localhost:4000/api/hello");
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button onClick={sayHello}>Say Hello</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;
