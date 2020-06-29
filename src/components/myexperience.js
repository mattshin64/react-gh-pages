import React from 'react';
function MyExperience(){
    return (
        <div>
            <h2 class='ml-5'>My Experience</h2>
            <div class="container mt-3 mb-3">
                <div class="row">
                    <div class="col-md-6 offset-md-0">
                        <ul class="timeline">
                            <li>
                                <h5>Hack Reactor</h5>
                                <h6>October 2019 - January 2020</h6>
                                <p>12 Week Software Engineering Immersive Program. Graduated with Most Growth Award.</p>
                            </li>
                            <li>
                                <h5>Volunter Software Engineer at EchoCompassion</h5>
                                <h6>April 2020 - Now</h6>
                                <p>Handled support tickets that revolved around front-end styling and incorrect back-end API calls.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyExperience;