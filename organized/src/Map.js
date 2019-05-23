import React, { Component } from 'react';
import JsonParser from './JsonParser';
import "./Map.css"; 



	// cd into <repo>/organized folder
	// npm install for dependencies
	// npm start to run webpage

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
      	{/* website interface has a text input, storing in srcBuilding
				the transportation method defaults to walking, but can be checked to biking
				and is stored in transMeth
			
			// 1. necessary: get the submit form to work

			// 2. return new tab of website

			// 3. load the embedded google maps on that page*/}
        return(
			<div>
  <div >
    <div >
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={true}
              className="form-check-input"
            />
            	Walking
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option2"
              className="form-check-input"
            />
            Biking
          </label>
        </div>
		<div className="form-group">
          <button className="btn btn-primary mt-2" type="submit">
		  <a href="page2.html">Summit</a>
          </button>
        </div>
        <div className="changer"> 
		</div>
      </form>

    </div>
  </div>
</div>
        );
    }
}

export default Map;