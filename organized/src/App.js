import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from './config.json';

import JsonParser from './JsonParser';
import Spinner from './component/Spinner';








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
        //this.makeEvent();
    };

    onFailure = (error) => {
      alert("Login failed");
    }

    //This function handles all the logic behind the "Request Calendar!" button.
    requestCalendar = async (e) =>{
        //Is there someway to get a list of all calendar associated with an account? Would the calendar ID just be the email?
        //As it is now, would need user to input their calendar ID if its not their email.
        const apiCall =  await fetch("https://www.googleapis.com/calendar/v3/users/me/calendarList/"+this.state.user.email,{
            method: "get",
            headers:{
                //Making the API call
                Authorization: "Bearer "+this.state.token
            }
        });
        const data = await apiCall.json();
        console.log(data);
        this.setState({timezone:data.timeZone})

    }

    getCalendarIDs = async (e) =>{
        const apiCall = await fetch("https://www.googleapis.com/calendar/v3/users/me/calendarList",{
            method: "get",
            headers:{
                Authorization: "Bearer "+this.state.token
            }
        });
        const data = await apiCall.json();
        console.log(data);
    }

    makeEvent = async (e) =>{
        // e.preventDefault();
        //See https://developers.google.com/calendar/create-events for more info
        //In the actual app jsontest would be replaced by the result of the GOLD Schedules API call.

        // const apiCall = await fetch("https://my-json-server.typicode.com/dkang1617/myjsontest/Courses",{
        const apiCall = await fetch("http://localhost:9000/json",{
            method:'get',
            mode:'cors'
        })
        const data = await apiCall.json();
        console.log(data);
        console.log(data.Courses);
        const jsonParser = new JsonParser(data.Courses);
        const courseCount = data.Courses.length;
        console.log(courseCount);
        for(var i = 0 ; i < courseCount; i++){
            console.log(jsonParser.getID(i)+' Meets at:'+jsonParser.getStartTime(i)+' Ends at:'+jsonParser.getEndTime(i));
            console.log(jsonParser.getDate(i))
            console.log(jsonParser.getRepeat(i))
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

        //Commented out to not spam my calendar
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

    render() {
        
        
        
        
        const {
            user,
            isDone,
            isAuthenticated
        } = this.state;

        let content = isAuthenticated ?
            (
                
                <div>
                    <h1>Organized</h1>
                    <div class="re-adjust">
                        <Spinner
                            givenName={user.givenName}
                            isDone={isDone}
                        />
                    </div>
                    <button onClick={this.logout} className="button">
                            Log out
                    </button>
                    <div>
                        <button onClick={this.getEvents}>
                            Get Events
                        </button>
                    </div>
                    <div>
                        <button onClick={this.javaTest}>
                            Java Test
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
