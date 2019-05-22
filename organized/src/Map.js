import React, { Component } from 'react';
import JsonParser from './JsonParser';

class Map extends Component {
	/* array for storing iframe strings */
	addToArray = async (e) =>{

		/* dkang = Daniels' online API */
		// const apiCall = await fetch("https://my-json-server.typicode.com/dkang1617/myjsontest/Courses",{

		/* local host = Krishna's json stuff - calls java */
		const apiCall = await fetch("http://localhost:9000/json",{
			/* method is GET call, mode specifies which mode - cors is the secure route */
			method:'get',
			mode:'cors'
		})

		/*	data waits on api
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
		/* console debug statement */
		for(var i = 0 ; i < courseCount; i++){
			console.log(jsonParser.getID(i)+' Meets at:'+jsonParser.getStartTime(i)+' Ends at:'+jsonParser.getEndTime(i));
			console.log(jsonParser.getDate(i))
			console.log(jsonParser.getRepeat(i))
		}

		/* add all course buildings to array */
		for(var i = 0; i < courseCount; i++){

		}

		/* this is where the events are being added to calendar */
		const mapApiCall = await fetch(  "https://www.googleapis.com/calendar/v3/calendars/"+this.state.email+"/events",{
			method:"get",
			headers:{
				'Content-Type': 'application/json ; charset=UTF-8',
				Authorization: "Bearer "+this.state.token,
			}
		})
	}

	render(){
		return(
			<div>
				<form onSubmit={this.addToArray}>
					<input type = "text" name="srcBuilding" placeholder= "Where the source is before going to class"></input>
					<input type = "radio" name="transMeth" value= "walking" checked> Walking> <br> </br> </input>
					<input type = "radio" name="transMeth" value= "biking"> Biking <br></br> </input>
					<button> Submit </button>
				</form>
			</div>
		);
	}
}

export default Map;
