import React from "react";

import { StoryContainer, StoryWrapper } from "./StoryElements";

import rectangle1 from "../../images/Rectangle 55.svg";
import rectangle2 from "../../images/Rectangle 56.svg";
import rectangle3 from "../../images/Rectangle 59.svg";
import rectangle4 from "../../images/Rectangle 60.svg";
import rectangle5 from "../../images/Rectangle 61.svg";
import rectangle6 from "../../images/Rectangle 62.svg";
import rectangle7 from "../../images/Rectangle 63.svg";

const Story = () => {
  return (
    <StoryContainer>
      <StoryWrapper>
        <div className="img-wrapper">
          <img className="rectangle1" src={rectangle1} alt="rectangle1" />
          <img className="rectangle2" src={rectangle2} alt="rectangle2" />
          <img className="rectangle3" src={rectangle3} alt="rectangle3" />
          <img className="rectangle4" src={rectangle4} alt="rectangle4" />
          <img className="rectangle5" src={rectangle5} alt="rectangle5" />
          <img className="rectangle6" src={rectangle6} alt="rectangle6" />
          <img className="rectangle7" src={rectangle7} alt="rectangle7" />
        </div>

        <div className="story-text">
          <div className="story-heading">Our Story</div>
          <div className="story-text1">
            We know this journey all too well. We are Black Female Founders who
            have schooled and worked all over the world. We have spent years
            searching for the best products for our crowns.
          </div>

          <div className="story-text2">
            We have felt overwhelmed, alone, hopeful, frustrated, happy and
            annoyed with this process. But now more than ever, we feel powerful.
            We are transforming your hair care journey through technology. We
            are here with you every step of the way, giving you what you deserve
            - the best.
          </div>
        </div>
      </StoryWrapper>
    </StoryContainer>
  );
};

export default Story;
