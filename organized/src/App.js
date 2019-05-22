import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import JsonParser from './JsonParser';
import Spinner from './component/Spinner';
/* make sure JsonParser.js is in the same folder as App.js */

import config from './config.json'; 


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: null,
            token: '',
            email: '',
            timezone:'',
            isDone:false
        };

        this.timeout = null;
    }

    setIsDoneTimeout = () => {
        this.timeout = setTimeout(() => {
            this.setState({ isDone: true });
        }, 5000)
    }
	/* button for logout */
    logout = () => {
        this.setState({
            isAuthenticated: false,
            token: '',
            user: null,
            email:'',
            timezone:'',
            eventName:'',
            startDate:'',
            endTime:''
        })
    };
	/* google button, which calls OAuth and calls makeEvent */
    googleResponse = (e) => {
        const response = e;
        console.log(response);
        this.setState({
            isAuthenticated:true,
            user:response.profileObj,
            token:response.tokenObj.access_token,
            email:response.profileObj.email
        });
        this.setIsDoneTimeout();
        // this.makeEvent(); // spams calendar - remove comment for demo
    };

	/* error message */
    onFailure = (error) => {
      alert("Login failed");
    }

	/* handles creation of events on calendar. Automatically called on google call  */
    makeEvent = async (e) =>{
        // e.preventDefault(); Used to be requested by button (not anymore).
        //See https://developers.google.com/calendar/create-events for more info
        //In the actual app jsontest would be replaced by the result of the GOLD Schedules API call.

        /* dkang = Daniels' online API */
        // const apiCall = await fetch("https://my-json-server.typicode.com/dkang1617/myjsontest/Courses",{

		/* local host = Krishna's json stuff - calls java */
        const apiCall = await fetch("http://localhost:9000/json",{
			/* method is GET call, mode specifies which mode - cors is the secure route */
            method:'get',
            mode:'cors'
        })

		/*
			data waits on api
			console.log is debug
			jsonParser object iterates through the json
			couseCount counts how many courses there are
		*/

        const data = await apiCall.json();
        console.log(data);
        console.log(data.Courses);
        const jsonParser = new JsonParser(data.Courses);
        const courseCount = data.Courses.length;
        console.log(courseCount);
        for(var i = 0 ; i < courseCount; i++){
            console.log(jsonParser.getID(i)+' Meets at:'+jsonParser.getStartTime(i)+' Ends at:'+jsonParser.getEndTime(i));
            console.log(jsonParser.getDate(i))
            console.log(jsonParser.getRepeat(i)) // debug

			/* event object is sent to calendar in the format provided by google */
            const event={
                'summary' : '{Organized} '+jsonParser.getID(i),
                'start' : {
                    //Gonna need to make something to parse the json file, current format needs tweeking before being made into events, hardcode for now
                    'dateTime' : jsonParser.getDate(i)+jsonParser.getStartTime(i),
                    'timeZone' : 'America/Los_Angeles',
                },
                'end' : {
                    'dateTime' : jsonParser.getDate(i)+jsonParser.getEndTime(i),
                    'timeZone' : 'America/Los_Angeles',
                },
                'recurrence' : ['RRULE:FREQ=WEEKLY;UNTIL=20190614T000000Z;WKST=SU;BYDAY='+jsonParser.getRepeat(i)],
        };

		/* this is where the events are being added to calendar */
        const apiCall = await fetch(  "https://www.googleapis.com/calendar/v3/calendars/"+this.state.email+"/events",{
            method:"post",
            body : JSON.stringify(event),
            headers:{
                'Content-Type': 'application/json ; charset=UTF-8',
                Authorization: "Bearer "+this.state.token,
            }
        })
    }

}

	/* debug */
    getEvents = async (e) => {
        const apiCall = await fetch("https://www.googleapis.com/calendar/v3/calendars/"+this.state.email+"/events",{
            method: "get",
            headers:{
                Authorization: "Bearer "+this.state.token
            }
        })
        const data = await apiCall.json();
        console.log(data)
    }

	/* debug for java component */
    javaTest = async (e) =>{
        const apiCall = await fetch("http://localhost:4567/my",{
            mode : "cors",
            method : "get",
        });
        //Fix from https://daveceddia.com/unexpected-token-in-json-at-position-0/
        const data = apiCall.text();
        //const data = await apiCall.json();
        data.then((value)=>{console.log(value)});
    }

	/* JSX/ html related stuff for website visuals */
    render() {
        
        
        const {
            user,
            isDone,
            isAuthenticated
        } = this.state;

        let content = isAuthenticated ?
            (
                
                <div>
                    <div className="mainpagetitle">
                    <h1>Organized</h1>
                    </div>
                    <div class="re-adjust">

                        <Spinner
                            givenName={user.givenName}
                            isDone={isDone}
                        />
                    </div>
                    <div className="re-adjusttwo">
                    <button onClick={this.logout} className="button">
                            Log out
                    </button>
                    </div>
                </div>
            
            ) :
            (
                <div className="mainpagetitle"> 
                    <h1>Organized</h1> 
                <div className="Movedown"> 

                    <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                        scope="https://www.googleapis.com/auth/calendar"
                        scope="https://www.googleapis.com/auth/calendar.events"
                    />
                </div>
                </div> 
            );

        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
