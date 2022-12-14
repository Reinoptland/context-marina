import React from "react";

export default function Student(props) {
  return (
    <div
      style={{
        backgroundColor: props.colors.color,
        color: props.colors.backgroundColor,
        padding: "40px",
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.specialty}</p>
    </div>
  );
}
