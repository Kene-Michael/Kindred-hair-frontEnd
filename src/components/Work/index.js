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
import img10 from "../../images/Ellipse 18.svg";
import img11 from "../../images/Line 4.svg";



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
            <img className ="img1" src={img1} alt=""/>
          </div>
          <div className="text-wrapper">
            <div className="number-img"> <img className="img7" src={img7} alt="img7"/> <div className="text-title">Create</div> </div>
            <div className="line"> <img className="img7" src={img11} alt="line" /><img className="img7" src={img10} alt="point" /></div>
          </div>
        </div>
        <div className="circle-wrapper">
          <div className="circle">
              <img className="img2" src={img2} alt=""/>
          </div>
          <div className="text-wrapper">
            <div className="number-img"> <img className="img7" src={img8} alt="itwo" /><div className="text-title">Discover</div></div>
            <div className="line"> <img className="img7" src={img11} alt="line" /><img className="img7" src={img10} alt="point" /></div>
          </div>
        </div>
        <div className="circle-wrapper">
          <div className="circle">
              <img className="img3" src={img3} alt=""/>
          </div>
          <div className="text-wrapper">
            <div className="number-img"> <img className="img7" src={img9} alt="three" /><div className="text-title">Connect</div> </div>
          </div>
        </div>
        <div className="text-paragraph">
            {" "}
            Create your personal hair profile by answering a few questions
        </div>
        <div className="text-paragraph">
            {" "}
            Discover products for your unique needs using our smart matching
            tools
        </div>
        <div className="text-paragraph">
              {" "}
              Get true feedback on products on hearing and sharing real stories{" "}
        </div>
      </div>
      <NavBtn>
        <NavBtnLink to="/discover your match">Discover your match</NavBtnLink>
      </NavBtn>
    </WorkContainer>
  );
};

export default Work;
