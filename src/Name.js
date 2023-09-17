import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Name() {
  const [name, setNAme] = useState("");
  const [url, setUrl] = useState("");
  const [showbtn, setShowbtn] = useState(true)
  const [showalrt, setShowalrt] = useState(true)


  let nav = useNavigate();
  // let str = "https://jaylu4324.github.io/Greeting/#/Wishe?name=";
  let str = "localhost:3000/#/Wishe?name="
  const handleSubmit = () => {
    setUrl(str + name);
    setShowbtn(false)

  };

  const handleCopy = () => {
    setShowalrt(false)
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      setShowalrt(true)
    }, 2000);
  };
  useEffect(() => {
    console.log(name);
    console.log(url);
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center mt-4">
        <div className="col-md-6">
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              NAME
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Enter Teacher's Name "
              onChange={(e) => {
                setNAme(e.target.value);
              }}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Wishe
            </button>{" "}
            <br />
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center align-items-center mt-5 pt-5"

      >
        <div className="col-md-5 col-8 text-end pb-5">{url}</div>
        <div className="col-md-3 col-4 pb-5">
          {showbtn ? <></> : <button
            className="btn btn-primary "
            onClick={() => {
              handleCopy();
            }}
          >
            Copy URL
          </button>}
        </div>
        {showalrt ? <></> : <div
          className="alert alert-success col-md-6 "
          role="alert"
          style={{ width: "60%" }}
        >
          URL Copied
        </div>}
      </div>



    </div>
  );
}

export default Name;
