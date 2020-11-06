import React from "react";
import { FeedbackContainer, NavBtnLink, NavBtn } from "./FeedbackElements";

import img4 from "../../images/image 4.svg";
import img5 from "../../images/image 5.svg";
import img6 from "../../images/image 6.svg";

const Feedback = () => {
  return (
    <FeedbackContainer>
      <div className="text"> See what our members say</div>

      <div className="circle-container">
        <div className="circle-wrapper">
          <div className="circle1"></div>
          <div className="circle-img">
            <img className="img" src={img4} alt="img4" />
          </div>
          <NavBtn>
            <NavBtnLink to="/discover your match">Play Video</NavBtnLink>
          </NavBtn>
        </div>

        <div className="circle-wrapper">
          <div className="circle2"></div>
          <div className="circle-img">
            <img className="img" src={img5} alt="img4" />
          </div>
          <NavBtn>
            <NavBtnLink to="/discover your match">Play Video</NavBtnLink>
          </NavBtn>
        </div>

        <div className="circle-wrapper">
          <div className="circle3"></div>
          <div className="circle-img">
            <img className="img" src={img6} alt="img4" />
          </div>
          <NavBtn>
            <NavBtnLink to="/discover your match">Play Video</NavBtnLink>
          </NavBtn>
        </div>
        <div className="text-paragraph">
            <h2>Okorie</h2>
            {" "}
            “I tested out the [video] service...it was life enhancing...not least because an actual expert tells me exactly what colour I need, and where precisely I should apply it.”
        </div>
        <div className="text-paragraph">
        <h2>Okorie</h2>
            {" "}
            “I tested out the [video] service...it was life enhancing...not least because an actual expert tells me exactly what colour I need, and where precisely I should apply it.”
        </div>
        <div className="text-paragraph">
        <h2>Okorie</h2>
              {" "}
              “I tested out the [video] service...it was life enhancing...not least because an actual expert tells me exactly what colour I need, and where precisely I should apply it.”
        </div>
      </div>
    </FeedbackContainer>
  );
};

export default Feedback;
