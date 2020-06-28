import React from 'react';
function MyExperience(){
    return (
        <div>
            <h2 style={{paddingLeft: 100}}>My Experience</h2>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-6 offset-md-0">
                        <ul class="timeline">
                            <li>
                                <h5>Hack Reactor</h5>
                                <h6 class="float-right">October 2019 - January 2020</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                            </li>
                            <li>
                                <h5>Volunter Software Engineer at EchoCompassion</h5>
                                <h6 class="float-right">4 March, 2014</h6>
                                <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyExperience;