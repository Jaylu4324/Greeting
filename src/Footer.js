import React from 'react';
import Img from "./technishal.png"

function Footer() {
  return (
    <footer className="bg-dark text-white text-start py-3 mt-5 ">
      <div className='row justify-content-end align-items-around justify-content-md-around align-items-center'>
        <div className='col-md-6 '>
          &copy; To all Teachers (From- JAY & KRUNAL)
        </div>
        <div className='col-md-1 pt-3 d-flex justify-content-center ' style={{ height: "15%" }}>
          <img src={Img} alt="" />
        </div>

      </div>


    </footer>
  );
}

export default Footer;
