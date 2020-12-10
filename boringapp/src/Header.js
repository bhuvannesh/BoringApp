import React from 'react';
import  './Header.css';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import IconButton from "@material-ui/core/IconButton";
import  ForumIcon from "@material-ui/icons/Forum";


function Header() {
    return (
        <div className='header'>
           <IconButton>
           <PersonOutlineOutlinedIcon fontSize="large" className="header_icon"/>
           </IconButton>
           <img className = "header_logo" src = "https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png  "
           alt= ""   />
           <IconButton>
               <ForumIcon fontsize ="large" className="header_icon"/>
           </IconButton>
           
        </div>
    )
}

export default Header;
