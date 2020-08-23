import React, { useState } from "react";

function InLineEdit({ title }) {
  const [editInput, setEditInput] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const handleClick = () => {
    setEditInput(!editInput);
  };

  const handelOnChange = (e) => {
    e.preventDefault();
    setEditTitle(e.target.value);
  };
  const onKeyPress = (event) => {
    if (event.keyCode == 13) {
      handleClick();
    }
  };
  return (
    <div>
      {editInput ? (
        <input
          type="text"
          name="title"
          value={editTitle}
          autoFocus={editInput}
          onChange={handelOnChange}
          onBlur={handleClick}
          onKeyDown={onKeyPress}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <p
          onClick={handleClick}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {editTitle}
        </p>
      )}
    </div>
  );
}

export default InLineEdit;
