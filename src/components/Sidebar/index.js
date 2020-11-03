import React from 'react';
import { SidebarContainer, 
        Icon, 
        CloseIcon,
        SidebarLink,
        SidebarWrapper,
        SidebarRoute,
        SideBtnWrap,
        SidebarMenu
    } 
    from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to = "how it works" onClick={toggle}>
                            How It Works
                        </SidebarLink>
                        <SidebarLink to = "our story" onClick={toggle}>
                            Our Story
                        </SidebarLink>
                        <SidebarLink to = "my journey" onClick={toggle}>
                            My Journey
                        </SidebarLink>
                       
                        
                        <SidebarLink to = "/signin" onClick={toggle}>
                            Sign In
                        </SidebarLink>
                    </SidebarMenu>

                    <SideBtnWrap>
                        <SidebarRoute to = "/discover your match" >Discover Your Match</SidebarRoute>
                    </SideBtnWrap>


                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar

// lade you need to use linkrouter to style your sign in