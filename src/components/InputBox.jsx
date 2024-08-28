import React from "react";
import "./style.css";

function InputBox() {
  return (
    <div class="input-container">
      <input class="input" name="text" type="text" />
      <label class="label" for="input">
        Enter Email
      </label>
      <div class="topline"></div>
      <div class="underline"></div>
    </div>
  );
}

export default InputBox;
