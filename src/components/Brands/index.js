import React from 'react'
import {BrandsContainer} from './BrandsElements'
import img20 from "../../images/image 20.svg";
import img21 from "../../images/image 21.svg";
import img22 from "../../images/image 22.svg";
import img23 from "../../images/image 23.svg";
import img24 from "../../images/image 24.svg";
import img25 from "../../images/image 25.svg";

const Brands = () => {
    return (
        <>
            <BrandsContainer>
                <div>Brands that we offer.</div>
                <div>
                <img className="img20" src={img20} alt="image20" />
                <img className="img21" src={img21} alt="image21" />
                <img className="img22" src={img22} alt="image22" />
                <img className="img23" src={img23} alt="image23" />
                <img className="img24" src={img24} alt="image24" />
                <img className="img25" src={img25} alt="image25" />

                </div>
            </BrandsContainer>
        </>
    )
}

export default Brands
