import React from 'react';
const tablestyle = {
    margin: '0 auto'
}
function MySkills(){
    return (
        <div id='container'>
            <h2 class='ml-5'>My Skills</h2>
            <table class='table w-75' style={tablestyle}>
                <thead>
                    <tr>
                        <th>Front End Technologies</th>
                        <th>Back End Technologies</th>
                        <th>Other Technologies</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>JavaScript(ES6)</td>
                        <td>Node.JS</td>
                        <td>Azure</td>
                    </tr>
                    <tr>
                        <td>HTML5</td>
                        <td>Express.JS</td>
                        <td>AWS(EC2/S3)</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>MySQL</td>
                        <td>Git</td>
                    </tr>
                    <tr>
                        <td>jQuery</td>
                        <td>PostgreSQL</td>
                        <td>Docker</td>
                    </tr>
                    <tr>
                        <td>React.JS</td>
                        <td>MongoDB</td>
                        <td>NPM</td>
                    </tr>
                    <tr>
                        <td>Styled Components</td>
                        <td>Mongoose.JS</td>
                        <td>Jest</td>
                    </tr>
                    <tr>
                        <td>Babel</td>
                        <td>Sequelize</td>
                        <td>Enzyme</td>
                    </tr>
                    <tr>
                        <td>Webpack</td>
                        <td>Python</td>
                        <td>NGINX</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default MySkills;