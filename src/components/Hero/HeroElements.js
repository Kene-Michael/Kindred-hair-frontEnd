import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";


export const HeroImg = styled.div`
  position: relative;
  background-color: #102421;
`;

export const Image = styled.img`
  max-width: 100%;
  display: block;
`;

export const ImgDiv = styled.div`
  margin: 12px;
`;

export const HeroText = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: absolute;
  top: 14.25rem;
  left: 60px;
  z-index: 4;

  font-family: Sunflora;
  font-weight: 500;
  font-style: normal;
  font-size: 4rem;
  line-height: 2.8125rem;
  color: #c7e0bf;
  @media screen and (max-width: 600px) {
    top: 9.25rem;
    font-size: 2.6rem;
    row-gap: 0;
    line-height: 2.6125rem;
    left: 30px;
    .text2{
        display: flex;
        flex-direction: column;
    }
  }
`;

export const ImageDiv = styled.div`
  height: inherit;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 12px;
    height: 15rem;

    .img {
      margin-left: -1rem;
      height: 15rem;
     
    }
    .img2 {
      margin-left: -2rem;
      height: 15rem;
      width: 15rem;
     
    }
    .img3 {
    
      height: 15rem;
    }
    .img4 {
      height: 15rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  flex-direction: row;
  gap: 12px;
  height: fit-content;

  @media screen and (max-width: 600px) {
    display: none;
    max-width: 600px;
  }
`;

export const ImageWrapper2 = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-rows: auto;
    grid-gap: 12px;
    max-width: 600px;

    //height: fit-content;
  }
`;

export const OverLay = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.80) 1%, transparent);

  @media screen and (max-width: 600px) {
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    /* display: none; */
  }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 40px;
    background: #C7E0BF;
    white-space: nowrap;
    padding: 15px 26px;
    margin-top:1.5rem;
    color: #000;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 500;
    font-style: normal;
    font-family: Pangram;
    letter-spacing: 0.1em;
    line-height: 1.875rem;
    @media screen and (max-width: 760px) {
        font-size: 0.8rem;
  }

    `;
