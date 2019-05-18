import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
<<<<<<< HEAD
<<<<<<< HEAD
import config from './config.json';
=======
// import config from './config.json';
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
// import config from './config.json';
>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
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
<<<<<<< HEAD
<<<<<<< HEAD
        }, 5000)
=======
        }, 3000)
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
        }, 5000)

>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
    }

    logout = () => {
        this.setState({
            isAuthenticated: false,
<<<<<<< HEAD
<<<<<<< HEAD
            token: '',
=======
            token: '', 
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
            token: '',

>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
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
<<<<<<< HEAD
<<<<<<< HEAD
        this.makeEvent();
=======
        //this.makeEvent();
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
        //this.makeEvent();

>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
        // const apiCall = await fetch("https://my-json-server.typicode.com/dkang1617/myjsontest/Courses",{
        const apiCall = await fetch("http://localhost:9000/json",{
<<<<<<< HEAD
=======
        const apiCall = await fetch("https://my-json-server.typicode.com/dkang1617/myjsontest/Courses",{
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
            method:'get',
            mode:'cors'
        })
        const data = await apiCall.json();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
        console.log(data);
        console.log(data.Courses);
        const jsonParser = new JsonParser(data.Courses);
        const courseCount = data.Courses.length;
        console.log(courseCount);
<<<<<<< HEAD
=======
        
        const jsonParser = new JsonParser(data);
        const courseCount = data.length;
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======

>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
        for(var i = 0 ; i < courseCount; i++){
            console.log(jsonParser.getID(i)+' Meets at:'+jsonParser.getStartTime(i)+' Ends at:'+jsonParser.getEndTime(i));
            console.log(jsonParser.getDate(i))
            console.log(jsonParser.getRepeat(i))
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======

>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
            const event={
                'summary' : '{Organized} '+jsonParser.getCourse(i),
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======

>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f

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
<<<<<<< HEAD
<<<<<<< HEAD
            mode : "cors",
=======
            mode : "cors",   
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
            mode : "cors",
>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
            method : "get",
        });
        //Fix from https://daveceddia.com/unexpected-token-in-json-at-position-0/
        const data = apiCall.text();
        //const data = await apiCall.json();
        data.then((value)=>{console.log(value)});
    }

    render() {
<<<<<<< HEAD
<<<<<<< HEAD
        const {
=======
        const { 
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
        const {
>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
            user,
            isDone,
            isAuthenticated
        } = this.state;

        let content = isAuthenticated ?
            (
                <div>
                    <div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <Spinner
                            givenName={user.givenName}
=======
                        <Spinner 
                            givenName={user.givenName} 
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
                        <Spinner
                            givenName={user.givenName}
>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
                            isDone={isDone}
                        />
                    </div>
                    <button onClick={this.logout} class="button">
                            Log out
                    </button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 6e61775750d95c2be1f39fa90b28691416097a75
=======
>>>>>>> 49a360936efb52cb03096f730a5f776e1f370e8f
                </div>
            ) :
            (
                <div>

                    <GoogleLogin
                        clientId={"config.GOOGLE_CLIENT_ID"}
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
