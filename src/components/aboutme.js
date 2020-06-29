import React from 'react';
const paragraphstyle = {
    color: 'gray'
}
function AboutMe(){
    return(
        <div id='container'>
            <h2 class='ml-5'>About Me</h2>
            <p style={paragraphstyle} class='ml-5'> <font size='4'> Hello I am an aspiring software engineer. </font></p>
        </div>
    )
}

export default AboutMe;