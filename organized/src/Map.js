import React, { Component } from 'react';
import JsonParser from './JsonParser';

class Map extends Component {
	// cd into <repo>/organized folder
	// npm install for dependencies
	// npm start to run webpage

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

		/* console debug statement */
		const data = await apiCall.json();
		console.log(data);
		console.log(data.Courses);
		const jsonParser = new JsonParser(data.Courses);
		const courseCount = data.Courses.length;
		console.log(courseCount);

		/* to call variables from input use e.target.elements.<name>.value */
		var buildingArray = [e.target.elements.srcBuilding.value]

		/* add all course buildings to array from jsonParser object */
		for(var i = 0; i < courseCount; i++){
			buildingArray.push(jsonParser.getBuilding(i));
		}

		/* console debug statement */
		for(var i = 0 ; i < buildingArray.length; i++){
			console.log(buildingArray[i]);
		}

		/* iterate through array and call google maps api */
		// insert here

	}

	render(){
		return(
			{/* website interface has a text input, storing in srcBuilding
				the transportation method defaults to walking, but can be checked to biking
				and is stored in transMeth
			*/}

			// 1. necessary: get the submit form to work

			// 2. return new tab of website

			// 3. load the embedded google maps on that page
			<div>
				<form action ={this.addToArray}>
					<input type = "text" name="srcBuilding" placeholder= "Starting Destination"></input>
					<input type = "radio" name="transMeth" value= "walking" checked> Walking> <br></br> </input>
					<input type = "radio" name="transMeth" value= "biking"> Biking <br> </br> </input>
					<input type = "submit" value = "Submit"> </input>
				</form>
			</div>
		);
	}
}

export default Map;
