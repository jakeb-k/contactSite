import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import VidBody from '../components/VidBody';
import Footer from "../components/Footer";
import axios from 'axios'; 



axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';



const Home = (props) => {
    var hover = false;
    function hoverPort(e) {
        if(hover === false){
            hover = true
        } else {
            hover = false
        }
        console.log(hover)

    }
    return(
        <div id="homeContainer">
            <Header /> 
            <VidBody />
            <Form onHover={hoverPort} /> 
            <Footer /> 
        </div>
    )
}
export default Home; 