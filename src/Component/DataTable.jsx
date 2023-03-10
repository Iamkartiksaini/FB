import React, { useState } from "react";
import axios from "axios";

function Data() {
  function load(e) {
    let files = e.target.files;
    console.log("files", files);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.addEventListener("load", (e) => {
      let form = new FormData();
      form.set("file", files[0]);
      // axios
      //   .post("http://localhost:8000/upload", form)
      //   .then((res) => console.log("client ", res));
      // console.log("img", form);
    });
  }
  function send(e) {}

  //   let file = fileElement.files[0];
  // let formData = new FormData();
  // formData.set('file', file);
  // axios.post("http://localhost:3001/upload-single-file", formData)
  //   .then(res => {
  //   console.log(res)
  // })

  return (
    <div className="DataTable">
      <input type="file" name="" id="" onChange={(e) => load(e)} />
      <button onClick={send}>Send</button>
    </div>
  );
}

export default Data;
