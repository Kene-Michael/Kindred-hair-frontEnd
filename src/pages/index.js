import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Journal from '../components/Journal';
import Feedback from '../components/Feedback';
import Story from '../components/Story';
import Brands from '../components/Brands';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

     const toggle = () => {
         setIsOpen(!isOpen)
     }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle= {toggle} />
            <Navbar toggle= {toggle}/>
            <Hero />
            <Work />
            <Feedback />
            <Story />
            <Brands />
            <Journal /> 
            <Newsletter /> 
            <Footer />
        </>
    )
}

export default Home
