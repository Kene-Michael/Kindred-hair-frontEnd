import React from 'react'
import {NewsletterContainer} from './NewsletterElements'

const Newsletter = () => {
    return (
        <div>
            <NewsletterContainer>
                <div className="text"> Join our newsletter for <span className="text-span"> hair-education tips</span>
                <div className = "email">Email Address 
                    <span className = "subscribe">Subscribe</span>
                
                    <div className="rule"></div>
                   
                </div>
                
                </div>

                
            </NewsletterContainer>
        </div>
    )
}

export default Newsletter
