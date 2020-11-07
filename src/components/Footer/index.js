import React from 'react'
import {FooterContainer, FooterLogo, FooterText, FooterBottom} from './FooterElements'

const Footer = () => {
    return (
        <>
        
        <FooterContainer> 
            <FooterLogo>KindredHair</FooterLogo>
            <FooterText>
                Press Area
            </FooterText>
            <FooterText>
                Shipping & Return Policy
            </FooterText>
            <FooterText>
                FAQ
            </FooterText>
            <FooterText>
                Newsletter
            </FooterText>
            <FooterBottom>
                <span>DISCLAMER</span> 
                <span>GENERAL CONDITION</span>
                <span>PRIVACY STATEMENT</span>
                <span>&copy; 2020 KINDRED HAIR</span>
            </FooterBottom>
        </FooterContainer>
            
        </>
    )
}

export default Footer
