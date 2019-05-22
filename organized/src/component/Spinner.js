
import React from "react";
import {BrowserRouter,Link} from 'react-router-dom';	

const Spinner =props=>(

	<div>
		{	props.isDone ?
					<div>
						<h3>Your life has been organized! Click <a href="https://calendar.google.com/calendar/r/month" target="_blank">here</a> to see you calendar</h3>
							<Link to="/map">
								<button class="button">Map</button>
							</Link>
						<br></br>
						<br></br>
				  </div>

						:
						<div>
                        <h3>Welcome {props.givenName}, Give us a moment to organize your life! </h3>
                        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                        <br></br>
                        <br></br>
                        </div>

                    }
              </div>
)


export default Spinner;



