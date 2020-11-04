import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Journal from '../components/Journal';

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
            <Journal />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home
