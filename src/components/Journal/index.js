import React from "react";
import {
  JournalContainer,
  JournalBtn,
  JournalBtnLink,
} from "./JournalElements";
import rectangle4 from "../../images/Rectangle 104.svg";
import rectangle5 from "../../images/Rectangle 105.svg";
import rectangle6 from "../../images/Rectangle 109.svg";

const Journal = () => {
  return (
    <>
      <JournalContainer>
        <div className="journal-heading">My Journal</div>

        <div className="journal-img">
          <div>
          <img className="rectangle4" src={rectangle4} alt="rectangle4" />
            <div className="text">Find the answers to your frequently asked questions here.</div>
            <JournalBtn>
              <JournalBtnLink to="/explore">Explore</JournalBtnLink>
            </JournalBtn>
          </div>
          <div>
          <img className="rectangle5" src={rectangle5} alt="rectangle5" />
            <div className="text">Find the answers to your frequently asked questions here.</div>
            <JournalBtn>
              <JournalBtnLink to="/explore">Explore</JournalBtnLink>
            </JournalBtn>
          </div>
          <div>
          <img className="rectangle6" src={rectangle6} alt="rectangle6" />
            <div className="text">Find the answers to your frequently asked questions here.</div>
            <JournalBtn>
              <JournalBtnLink to="/explore">Explore</JournalBtnLink>
            </JournalBtn>
          </div>
        </div>
      </JournalContainer>
    </>
  );
};

export default Journal;
