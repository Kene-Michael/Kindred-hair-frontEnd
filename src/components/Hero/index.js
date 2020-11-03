import React from "react";

import img1 from "../../images/Rectangle 5.jpg";
import img2 from "../../images/Rectangle 6.jpg";
import img3 from "../../images/Rectangle 7.jpg";
import img4 from "../../images/Rectangle 8.jpg";
import img5 from "../../images/Rectangle 9.jpg";
import img6 from "../../images/Rectangle 10.jpg";
import img7 from "../../images/Rectangle 11.jpg";
import img8 from "../../images/Rectangle 12.jpg";
import img9 from "../../images/Rectangle 13.jpg";
import img10 from "../../images/Rectangle 14.jpg";

import {
  HeroImg,
  ImageWrapper,
  ImageDiv,
  Image,
  ImgDiv,
  ImageWrapper2,
  OverLay,
  HeroText,
  TextWrapper,
  NavBtn,
  NavBtnLink
} from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroImg>
        <HeroText>
          <TextWrapper>
            <div className="text">Easily Discover</div>

            <div className ="text" >
              <span className="span-text">Hair Care</span>

              <span className="span-text"> Products</span>
            </div>

            <NavBtn>
                <NavBtnLink to='/discover your match'>
                            Discover your match
                </NavBtnLink>
        </NavBtn>
          </TextWrapper>

          

        </HeroText>

        <OverLay />
        <ImageWrapper2>
          <ImageDiv>
            <Image className="img3" src={img1} />
            <Image className="img4" src={img2} />
          </ImageDiv>
          <ImageDiv>
            <Image className="img" src={img6} />
            <Image className="img2" src={img7} />
          </ImageDiv>
        </ImageWrapper2>

        <ImageWrapper>
          <ImageDiv>
            <Image src={img1} />
          </ImageDiv>

          <ImageDiv>
            <Image src={img2} />
          </ImageDiv>

          <ImageDiv>
            <Image src={img3} />
          </ImageDiv>

          <ImageDiv>
            <Image src={img4} />
          </ImageDiv>

          <ImageDiv>
            <Image src={img5} />
          </ImageDiv>
        </ImageWrapper>
        <ImgDiv></ImgDiv>

        <ImageWrapper>
          <ImageDiv>
            <Image src={img6} />
          </ImageDiv>

          <ImageDiv>
            <Image src={img7} />
          </ImageDiv>

          <ImageDiv>
            <Image src={img8} />
          </ImageDiv>

          <ImageDiv>
            <Image src={img9} />
          </ImageDiv>

          <ImageDiv>
            <Image src={img10} />
          </ImageDiv>
        </ImageWrapper>
      </HeroImg>
    </>
  );
};

export default Hero;
