import React, { Component } from 'react';
import JsonParser from './JsonParser';

class Map extends Component {
	// cd into <repo>/organized folder
	// npm install for dependencies
	// npm start to run webpage

	addToArray = async (e) =>{
		e.preventDefault();

        /* initialized values using user input values and a helper integer */
		const srcBuilding = e.target.elements.srcBuilding.value;
        const transMeth = e.target.elements.transMeth.value;
        var alignCounter = 5;


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
		for(var buildingIterator = 0; buildingIterator < courseCount; buildingIterator++){
			buildingArray.push(jsonParser.getBuilding(buildingIterator));
        }

		/* iterate through array to make a url string, then launch the google maps formatted url, ignoring duplicates */
        for(var urlIterator = (buildingArray.length - 1); urlIterator > 0; urlIterator--){
            if(buildingArray[urlIterator - 1] == buildingArray[(urlIterator)]){
                console.log("duplicate ignored");
            }
            else{
                var urlString = "https://www.google.com/maps/dir/?api=1&origin=";
                urlString += buildingArray[urlIterator - 1];

                urlString += "&destination=";
                urlString += buildingArray[(urlIterator)];

                urlString += "&travelmode=";
                urlString += transMeth;

                var alignValues = "top="
                var alignHelp = (33 * (alignCounter));
                alignValues += alignHelp;
                alignValues += ",left=";
                alignValues += alignHelp;
                alignValues += ",width=1000,height=500";

                console.log(urlString);
                console.log(alignValues);
                window.open(urlString, "_blank", alignValues);
                alignCounter--;
            }
        }
	}

	manualAdd = async (e) =>{
		e.preventDefault();

		/* initialized values using user input values and a helper integer */
		const srcBuilding = e.target.elements.srcBuilding.value;
		const transMeth = e.target.elements.transMeth.value;
		var alignCounter = 5;
	}
    render(){
		return(
			<div>
                <div>
                {/* website interface has a text input, storing in srcBuilding
                    the transportation method defaults to walking, but can be checked to biking
                    and is stored in transMeth

                // 1. necessary: get the submit form to work

                // 2. return new tab of website

                // 3. load the embedded google maps on that page
                // additional comment: after key,
                // &origin=srcBuilding
                // &destination=nextplace
                // &mode=transMeth                         */}
                </div>
                    <div>
					<text>
						Note: to use this functionality, you must allow popups in your browser
					</text>
					<br/><br/><br/>
					<text>
						Automated Class Pathing Instructions:
					</text> <br/>
					<text>
						Insert your starting location (e.g, your dorm room) and select the method in which you want to go to class.
					</text>
        				<form onSubmit ={this.addToArray}>
        					<input type = "text" name="srcBuilding" placeholder= "Starting Destination"/><br/>
        					<input type = "radio" id="walking" name="transMeth" value= "walking" checked/>
        					<label for = "walking">Walking</label><br/>
        					<input type = "radio" id="biking" name="transMeth" value= "bicycling"/>
        					<label for = "biking">Biking</label><br/>
        					<button>Submit</button>
        				</form>
                    </div>
					<br/><br/><br/><br/><br/>
					<text>
						Manual Class Pathing Instructions:
					</text> <br/>
					<text>
						Insert up to 10 location and select the method in which you want to go to each of these destinations.
					</text>
					<div>
        				<form onSubmit ={this.manualAdd}>
        					<input type = "text" name="location1" placeholder= "Starting Destination"/><br/><br/>

							<input type = "text" name="location2" placeholder= "2nd Destination"/><br/>
							<input type = "radio" id="walking" name="to2nd" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to2nd" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

							<input type = "text" name="location3" placeholder= "3rd Destination"/><br/>
							<input type = "radio" id="walking" name="to3rd" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to3rd" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

							<input type = "text" name="location4" placeholder= "4th Destination"/><br/>
							<input type = "radio" id="walking" name="to4th" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to4th" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

							<input type = "text" name="location5" placeholder= "5th Destination"/><br/>
							<input type = "radio" id="walking" name="to5th" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to5th" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

							<input type = "text" name="location6" placeholder= "6th Destination"/><br/>
							<input type = "radio" id="walking" name="to6th" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to6th" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

							<input type = "text" name="location7" placeholder= "7th Destination"/><br/>
							<input type = "radio" id="walking" name="to7th" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to7th" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

							<input type = "text" name="location8" placeholder= "8th Destination"/><br/>
							<input type = "radio" id="walking" name="to8th" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to8th" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

							<input type = "text" name="location9" placeholder= "9th Destination"/><br/>
							<input type = "radio" id="walking" name="to9th" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to9th" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

							<input type = "text" name="location10" placeholder= "10th Destination"/><br/>
							<input type = "radio" id="walking" name="to10th" value= "walking" checked/>
							<label for = "walking">Walking</label>
							<input type = "radio" id="biking" name="to10th" value= "bicycling"/>
							<label for = "biking">Biking</label><br/><br/>

        					<button>Submit</button>
        				</form>
                    </div>


			</div>

		);
	}
}

export default Map;
