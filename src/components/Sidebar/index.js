import React from 'react';
import { SidebarContainer, 
        Icon, 
        CloseIcon,
        SidebarLink,
        SidebarWrapper,
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
                        <SidebarLink to = "shop" onClick={toggle}>
                            Shop
                        </SidebarLink>
                       
                        
                        <SidebarLink to = "connect" onClick={toggle}>
                            Connect
                        </SidebarLink>
                        <SidebarLink to = "/articles" onClick={toggle}>
                            Articles
                        </SidebarLink>
                        <SidebarLink to = "/contact" onClick={toggle}>
                            Contact
                        </SidebarLink>
                        
                    </SidebarMenu>


                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar

// lade you need to use linkrouter to style your sign in