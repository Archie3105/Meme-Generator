import React, { useState } from "react";
import Draggable from "react-draggable";

function Text() {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to edit.");
  return (
    <Draggable>
      {editMode ? (
        <input
          style={{}}
          className="text-xl font-bold m-auto"
          onDoubleClick={(e) => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1
          onDoubleClick={(e) => setEditMode(true)}
          className="text-xl font-bold block"
        >
          {val}
        </h1>
      )}
    </Draggable>
  );
}

export default Text;
