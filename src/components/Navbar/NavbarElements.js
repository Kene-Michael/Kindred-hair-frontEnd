
import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';


export const Nav = styled.nav`
    background: #fff;
    height:70px;
    // margin-top: -80px;
    display: flex;
    align-items: center;
    // font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    // justify-content: flex-start;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 1.5rem;
    max-width: 1100px;

`;

export const NavLogo = styled(LinkRouter)`
    color: #102421;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5625rem;
    display: flex;
    align-items: center;
    margin-left: 2.4rem;
    font-weight: 400;
    text-decoration: none;
    font-family: Sunflora;
    font-style: normal;
    line-height: 1.8281rem;


`;

export const MobileIcon= styled.div`
    font-size: 	1.5625rem;
    cursor: pointer;  


@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    max-width: 760px;

}
@media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    max-width: 600px;

}
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 100vw;
    white-space: nowrap;
    // justify-content: flex-start;
    padding: 0px 25px;

    @media screen and (max-width: 760px) {
        display: none;
    }

`;


export const NavMenu2 = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 420px;
    width: 100vw;
    white-space: nowrap;
    // justify-content: flex-end;
`;

export const NavItem = styled.li`
    height: 70px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #102421;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    font-size: 0.8125rem;
    font-family: Futura;

    line-height: 70px;


letter-spacing: 0.1em;

    &:active {
        border-bottom: 2px solid #000;
    }

`;

export const NavSign = styled.ul`
    display: flex;
    align-items: center;
    padding: 0px 10px;

    @media screen and (max-width: 760px) {
            display: none;
        }
`;



export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width:760px) {
        display: none;
    }    

`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 20px;
    background:  #102421;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 0.75rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    font-family: Futura;
    letter-spacing: 0.1em;



    /* &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
        color:#fff;

    } */



`
