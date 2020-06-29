import React from 'react';
const paragraphstyle = {
    color: 'gray'
}
function AboutMe(){
    return(
        <div id='container'>
            <h2 class='ml-5'>About Me</h2>
            <p style={paragraphstyle} class='ml-5 pl-5'> <font size='4'> Driven, diligent, and astute full-stack software engineer who is based in San Bruno California. I strive to continuously adapt to the ever-changing industry and incorporate different technologies and solutions to create a innovative and well-organized product.<br/> Coming from a multi-cultural background sparks a natural curiosity in me to learn new languages and to understand and integrate myself into tech culture. As a result I am excited to dive into the industry and open to many different experiences that will enhance my knowledge and challenges me to step out of my comfort zone. <br/> In my free time I watch a lot of NBA and am continuously fascinated by the stories  that statistics can paint. I also love to connect with people and getting to know them on a one-one basis. </font></p>
        </div>
    )
}

export default AboutMe;