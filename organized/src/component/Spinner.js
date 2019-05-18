import React from "react";

const Spinner =props=>(

	<div>
		{	props.isDone ?
					<div>
						<h3>Your life has been organized! Click <a href="https://calendar.google.com/calendar/r/month" target="_blank">here</a> to see you calendar</h3>
						<a href="page2.html" target="_blank"><button class="button">Map</button></a>
						<br></br>
						<br></br>
				  </div>

						:
						<div>
                        <h3>Welcome {props.givenName}, Give us a moment to organize your life! </h3>
                         <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        <br></br>
                        <br></br>
                        </div>
                    }
              </div>
)

export default Spinner;

