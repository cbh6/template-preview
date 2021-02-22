import React from "react";

export default function Cards({ color }) {
  return (
    <div className="cards">
      <div className="card" style={{ background: color }}></div>
      <div className="card" style={{ background: color }}></div>
      <div className="card" style={{ background: color }}></div>
      <div className="card" style={{ background: color }}></div>
      <div className="card" style={{ background: color }}></div>
      <div className="card" style={{ background: color }}></div>
      <div className="card" style={{ background: color }}></div>
    </div>
  );
}
