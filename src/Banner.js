import React, { useState } from "react";

export default function Banner({ color }) {
  const [editing, setEditing] = useState(false);
  return (
    <div
      className="banner"
      style={{ background: color }}
      onClick={() => setEditing(!editing)}
    >
      {editing && "Editando..."}
    </div>
  );
}
