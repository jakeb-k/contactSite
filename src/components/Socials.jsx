import React from "react";
import { SocialIcon } from 'react-social-icons'; 


const Socials = () => {
    return(
    <div id='social-icons'>
      <div className='social-group'> 
        <SocialIcon fgColor='#333333' bgColor='#ff6600' className='icon' url='https://www.instagram.com/alcayaus/' />
        <SocialIcon fgColor='#333333' bgColor='#ff6600' className='icon' url='https://www.youtube.com/channel/UCB3PR1ZC-yNpKUnoibSNSGw' />
      </div>
      <div className='social-group'>
        <SocialIcon fgColor='#333333' bgColor='#ff6600' className='icon' url='https://www.tiktok.com/@alcayaus' />
        <SocialIcon fgColor='#333333' bgColor='#ff6600' className='icon' url='https://open.spotify.com/artist/7bFaGXF8NHB0AyecBDdp0Y?si=Ap4CfYg4QneeX0zi8fU52w' />
      </div>
    </div>
    )
}
export default Socials; 