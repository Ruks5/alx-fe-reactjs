// src/components/Counter.jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "20px", padding: "10px", backgroundColor: "white", border: "1px solid gray", borderRadius: "8px" }}>
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>Current Count: {count}</p>
      <button 
        style={{ margin: "5px", padding: "8px 12px" }} 
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button 
        style={{ margin: "5px", padding: "8px 12px" }} 
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button 
        style={{ margin: "5px", padding: "8px 12px" }} 
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;