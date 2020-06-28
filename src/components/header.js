import React from 'react';
import profile from '../profile.png'
const profilestyle ={
    borderradius: '50%',
    width: '250px'
}
function Header(){
    return (
    <div className='jumbotron text-center'>
        <img src={profile} style={profilestyle} alt='Me'></img>
        <h1>Matthew Shin</h1>
        <h4>Full Stack Software Engineer</h4>
    </div>
)
}
export default Header;