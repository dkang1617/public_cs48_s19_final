import React, { Component } from 'react';
import JsonParser from './JsonParser';

class Map extends Component {
	// cd into <repo>/organized folder
	// npm install for dependencies
	// npm start to run webpage

	addToArray = async (e) =>{
		e.preventDefault();
		const srcBuilding = e.target.elements.srcBuilding.value;
		/* dkang = Daniels' online API */
		const apiCall = await fetch("https://my-json-server.typicode.com/dkang1617/myjsontest/Courses",{

		/* local host = Krishna's json stuff - calls java */
		// const apiCall = await fetch("http://localhost:9000/json",{
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
		const jsonParser = new JsonParser(data);
		const courseCount = data.length;
		console.log(courseCount);

		/* to call variables from input use e.target.elements.<name>.value */
		var buildingArray = [srcBuilding];

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
			<div>
			{/* website interface has a text input, storing in srcBuilding
				the transportation method defaults to walking, but can be checked to biking
				and is stored in transMeth
			

			// 1. necessary: get the submit form to work

			// 2. return new tab of website

			// 3. load the embedded google maps on that page*/}
			<div>
				<form onSubmit ={this.addToArray}>
					<input type = "text" name="srcBuilding" placeholder= "Starting Destination"/><br/>
					<input type = "radio" id="walking" name="transMeth" value= "walking" checked/>
					<label for = "walking">Walking</label><br/>
					<input type = "radio" id="biking" name="transMeth" value= "biking"/>
					<label for = "biking">Biking</label><br/>
					<button>Submit</button>
				</form>
			</div>
			</div>

		);
	}
}

export default Map;
