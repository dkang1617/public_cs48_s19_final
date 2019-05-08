import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
//import config from './config.json'
import jsontest from './jsontest'
import JsonParser from './JsonParser'


class App extends Component {

    state = { 
        isAuthenticated: false,
        user: null,
        token: '',
        email: '',
        timezone:'',
    };

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null,email:'',timezone:'',eventName:'',startDate:'',endTime:''})
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
        e.preventDefault();
        //See https://developers.google.com/calendar/create-events for more info
        //In the actual app jsontest would be replaced by the result of the GOLD Schedules API call.
        const event={
            'summary' : jsontest.Courses[0].id,
            'start' : {
                //Gonna need to make something to parse the json file, current format needs tweeking before being made into events, hardcode for now
                'dateTime' : '2019-05-13T14:00:00',
                'timeZone' : 'America/Los_Angeles',
            },
            'end' : {
                'dateTime' : '2019-05-13T15:15:00',
                'timeZone' : 'America/Los_Angeles',
            },
        };
        //console.log(jsontest.Courses.length);
        //console.log(event)
        const jsonParser = new JsonParser(jsontest);

        console.log(jsonParser);
        const courseCount = jsontest.Courses.length;
        console.log(courseCount);
        for(var i = 0 ; i < courseCount; i++){
            console.log(jsonParser.getID(i));
        }

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

    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p> Welcome {this.state.user.givenName}  </p>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                    <p>Your token is:{this.state.token}</p>
                    
                    <div>
                        <button onClick={this.requestCalendar} className="calendarButton">
                            Request calendar timezone!
                        </button>
                    </div>
                    <div>
                        {this.state.timezone && <p>Your timezone is: {this.state.timezone }</p>}
                    </div>
                    <div>
                        <button onClick={this.getCalendarIDs} className="getCalendarIDsButton">
                            Get Calendar IDs!
                        </button>
                    </div>
                    
                    <div>
                        <button onClick={this.makeEvent}>
                            Make Events
                        </button>
                    </div>
                    <div>
                        <button onClick={this.getEvents}>
                            Get your events!
                        </button>
                    </div>

                </div>
            ) :
            (
                <div>
                
                    <GoogleLogin
                        clientId={"uncomment me! config.GOOGLE_CLIENT_ID"}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                        scope="https://www.googleapis.com/auth/calendar"
                        scope="https://www.googleapis.com/auth/calendar.events"
                    />
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