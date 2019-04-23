import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from './config.json'


class App extends Component {

    state = { 
        isAuthenticated: false,
        user: null,
        token: '',
        timezone:'',
        eventName:'',
        startDate:'',
        endTime:''
    };

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };
    
    googleResponse = (e) => {
        const response = e;
        console.log(response);
        this.setState({
            isAuthenticated:true,
            user:response.profileObj,
            token:response.tokenObj.access_token})

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
        const eventName = e.target.elements.eventName.value;
        const startDate = e.target.elements.startDate.value;
        const endDate = e.target.elements.endDate.value;

        console.log(eventName+' '+startDate+' '+endDate)

    }

    // goldTest = async(e)=>{
    //     const apiCall=await fetch("ttps://api.ucsb.edu/dining/menu/v1/2019-04-19",{
    //         method: "get",
    //         headers:{
    //             accept:application/json
    //         }
    //     });
    //     const data = apiCall.json();
    //     console.log(data);
    // }


    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Welcome {this.state.user.givenName}  </p>
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
                        <form onSubmit={this.makeEvent}>
                            <input type ="text" name="eventName" placeholder="Name of event"/>
                            <input type ="text" name="startDate" placeholder="Start of event, MM/DD/YY 24:00"/>
                            <input type ="text" name="endDate" placeholder="End of event, MM/DD/YY 24:00"/>
                            <button>Submit</button>
                        </form>
                    </div>

                </div>
            ) :
            (
                <div>
                    <h1>Organized</h1>
                    <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
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