import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(": Text copied", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(": Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#707B7C",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-2"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-3 my-2"
          onClick={handleLoClick}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-3 my-2"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-3 my-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <h6>Number of Characters {text.length}</h6>
        <h6>
          Number of words{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </h6>
        <h6>
          Minutes Required To read{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
        </h6>
        <h2 className="my-3">Preview</h2>
        <p>
          <b>{text.length > 0 ? text : "Enter Somehing To Preview"}</b>
        </p>
      </div>
    </>
  );
}
