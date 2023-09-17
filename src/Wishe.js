import React, { useEffect, useState } from "react";
import "./wishe.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";


function Wishe() {
  const [isloading, setLoading] = useState(true);
  const [name, setName] = useState('');
  let location = useLocation("")
  useEffect(() => {

    let name = (new URLSearchParams(location.search)).get("name")

    setName(name)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return isloading ? (
    <div className="d-flex justify-content-center align-item-center mt-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      &nbsp; Loading....
    </div>
  ) : (
    <>

      <Navbar />
      <div className="container-fluid"  >
        <div
          className="row justify-content-center align-items-center   "
          id="bgc"
          style={{ height: "90vh" }}
        >
          <div className="col-md-5 d-flex align-items-center" style={{ height: "78.5%" }}>
            <div className="card" style={{ width: "18rem;", borderRadius: "10px" }}>
              <div className="card-body">
                <h5 className="card-title">Dear {name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Happy Teacher's Day
                </h6>
                <p className="card-text">
                  On this special day, I want to express my heartfelt thanks for
                  your patience, wisdom, and unwavering support.
                </p>
                <p className="card-text">
                  To the teacher who believed in me even when I didn't, thank you
                  for your faith and encouragement.
                </p>
                <p className="card-text">
                  Dear Teacher, your lessons extended far beyond the classroom.
                  Thank you for imparting not just knowledge but life lessons.
                </p>

                <h5 className="card-title text-end">Thank you</h5>

              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Wishe;
