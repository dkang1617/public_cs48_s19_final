//Object that responsible for parsing a json file into valid format to make events. Expecting json stucture to be similiar to jsontest.json
class JsonParser{

	constructor(jsonFile){
		this.jsonFile=jsonFile;
	}

	getStartTime(index){
		//Makes a substring that just contains the time, no date info
		return(this.jsonFile[index].meetingtimeone.substring(11));
	}
	getEndTime(index){
		return(this.jsonFile[index].meetingendone.substring(11));
	}
	getID(index){
		return(this.jsonFile[index].id);
	}
	//Figure out the repeating rule
	getRepeat(index){
		var dict = {
			"M" : "MO,WE",
			"T" : "TU,TH"
		}
		const day = this.jsonFile[index].meetingdayone
		return(dict[day]);
	}
	getDate(index){
		return(this.jsonFile[index].meetingtimeone.substring(0,11))
	}
	getCourse(index){
		return(this.jsonFile[index].id)
	}
	getBuilding(index){
		return(this.jsonFile[index].id)
	}
}

export default JsonParser;