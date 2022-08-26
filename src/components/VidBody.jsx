import React from 'react';
import Button from './Buttons'; 
import Video from './Video';



const Body = () => {
    return(
        <div id='bodyContainer'>
            <Button id='contactButton' name='Contact'/>
            <Video url='https://www.youtube.com/watch?v=njDewOwzy_E'/> 
        </div>
        
    )
}

export default Body; 