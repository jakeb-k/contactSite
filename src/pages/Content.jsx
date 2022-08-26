import React from "react";
import Header from "../components/Header";
import VidBody from '../components/VidBody';
import Footer from "../components/Footer";
import axios from 'axios'; 



axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';



const Home = () => {
    return(
        <div id="homeContainer">
            <Header /> 
            <VidBody />
            <Footer /> 
        </div>
    )
}
export default Home; 