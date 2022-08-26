import React from "react";
import Copyright from "./Copyright";
import Socials from "./Socials";
import Links from './Links'; 

const Footer = () => {
   
    return(
        <div id='footerContainer'> 
            <div>
                <Links type='Bookings: ' url='mailto: alcay@bookings.com' email='alcay@bookings.com' />
                <Links type='Colabs: ' url='#' email='alcay@colabs.com' />
            </div>
            <Copyright />
            <Socials /> 
        </div>
    )
}
export default Footer; 