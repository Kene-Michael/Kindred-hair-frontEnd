import React from "react";
import { NavBtnLink, NavBtn, WorkContainer, WorkHeader } from "./WorkElements";
import {BsPlus} from "react-icons/bs";
import {BiMessageAltDetail} from "react-icons/bi";

import img1 from "../../images/Ellipse 20.svg";
import img2 from "../../images/Ellipse 21.svg";
import img3 from "../../images/Ellipse 22.svg";
import img4 from "../../images/Ellipse 29.svg";

import img5 from "../../images/Vector (1).svg";
import img6 from "../../images/Vector (2).svg";
import img7 from "../../images/image 19.svg";
import img8 from "../../images/image 18.svg";
import img9 from "../../images/image 17.svg";

const Work = () => {
  return (
    <WorkContainer>
        
        
        <div className="img-div">
            <img className="img4" src={img4} alt="img4" />
        </div>
        <div className="medium-circle">
            <div className="small-circle">
                <img className="img5" src={img5} alt="img5" />
                <BsPlus className="small-circle-icon" />
            </div>
        </div>
        <div className="medium-circle2">
            <div className="small-circle2">
                <img className="img6" src={img6} alt="img6" />
            </div>
        </div> 
        <div className="medium-circle3">
            <div className="small-circle3">
                <BiMessageAltDetail className="small-circle3-icon"/>
            </div>
        </div>
      <WorkHeader> How It Works</WorkHeader>
      <div className="circle-container">
        <div className="circle-wrapper">
          <div className="circle">
          <img className="img1" src={img1} />
          </div>
          <div className="text-wrapper">
            <div> Create </div>
            <div>
              {" "}
              Create your personal hair profile by answering a few questions
            </div>
          </div>
        </div>
        <div className="circle-wrapper">
        <div className="circle">
            <img className="img2" src={img2} />
        </div>
          <div className="text-wrapper">
            <div> Discover</div>
            <div>
              {" "}
              Discover products for your unique needs using our smart matching
              tools
            </div>
          </div>
        </div>
        <div className="circle-wrapper">
        <div className="circle">
            <img className="img3" src={img3} />
        </div>
          <div className="text-wrapper">
            <div> Connect </div>
            <div>
              {" "}
              Get true feedback on products on hearing and sharing real stories{" "}
            </div>
          </div>
        </div>
      </div>
      <NavBtn>
        <NavBtnLink to="/discover your match">Discover your match</NavBtnLink>
      </NavBtn>
    </WorkContainer>
  );
};

export default Work;
