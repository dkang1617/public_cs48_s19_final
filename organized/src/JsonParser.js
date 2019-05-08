//Object that responsible for parsing a json file into valid format to make events. Expecting json stucture to be similiar to jsontest.json
class JsonParser{

	constructor(jsonFile){
		this.jsonFile=jsonFile;
	}

	getTime(index){
		const time=this.jsonFile.Courses[index].meetingtimeone;
		return(time);
	}
	getID(index){
		const id=this.jsonFile.Courses[index].id;
		return(id);
	}
	//How do we determine what days of the calendar correspond to the days of the week? (ie How do we know that May 7, 2019 is a Tuesday?)
}

export default JsonParser;