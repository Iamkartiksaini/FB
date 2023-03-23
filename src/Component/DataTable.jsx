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

  async function loadImage() {
    if (mType !== "") {
      const form = new FormData();
      form.set("file", upFile);
      await axios.post("http://localhost:8000/upload", form).then((res) => {
        fileName = res.data.newField;
        console.log("Uploading media res ", res.data);
      });
    }
  }

  return (
    <div className="DataTable">
      <input type="file" name="" id="" onChange={(e) => load(e)} />
      <button>Send</button>
    </div>
  );
}

export default Data;
