import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state={isOpen:false};
    this.OpenNav = this.OpenNav.bind(this);
    this.NavButton = this.NavButton.bind(this);
    this.NavList = this.NavList.bind(this); 
  }
  OpenNav() {
    if(this.state.isOpen===false) {
      this.setState({isOpen:true});
    } else {
      this.setState({isOpen:false});
    }
  }
    NavButton(){
      return(
        <div id='navbutton-container' onClick={this.OpenNav}>
          <div className='barSet'>
            <div className={this.state.isOpen ?  'open-bar1' : 'barL' }>
            </div>
            <div className={this.state.isOpen ?  'open-bar2' : 'barR' }>
            </div>
          </div><div className='barSet'>
            <div className={this.state.isOpen ?  'open-bar5' : 'barL' }>
            </div>
            <div className={this.state.isOpen ?  'open-bar6' : 'barR' }>
            </div>
          </div><div className='barSet'>
            <div className={this.state.isOpen ?  'open-bar4' : 'barD' }>
            </div>
          </div>
        </div>
      )
    }
    NavList() {
      return(
        <div>
            <this.NavButton onClick={this.OpenNav} />
            <div id="nav-list-items">
            <ul>
            <li>
                <Link to='/'>
                  Home
                </Link>
            </li>
            <li>
              <Link to='/content'>
                Content
                </Link>
            </li>
          </ul>
          </div>
        </div>
      )
    }
    render() {
    return(
      <div className={this.state.isOpen ? 'opened-nav':'closed-nav'}>
        <this.NavList />
      </div>
    )
  }
}

export default Navbar; 