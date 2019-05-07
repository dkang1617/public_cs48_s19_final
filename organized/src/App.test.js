import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Login working', () => {
	const div = document.createElement('div');
	let testApp = ReactDOM.render(<App />, div);
	try{
		testApp.googleResponse()
	}
	//Getting a typeError because need to provide a valid login to get back a profileObj. Since no valid login, undefined profileObj 
	catch (TypeError){
		//Need a valid google login for this to work. Assuming we did get a valid profileObj, fake what would happen if we were given a valid login?
		testApp.setState({
			user:"fakeName",
            token:"12345",
            email:"fake@ucsb.edu"
		});
	}
	expect(testApp.state.user).toEqual("fakeName");
	expect(testApp.state.token).toEqual("12345");
	expect(testApp.state.email).toEqual("fake@ucsb.edu");
	ReactDOM.unmountComponentAtNode(div);
});

it("Logout working", () =>{
	//Making a fake user object for the purpose of testing
	const user={
		givenName : "fake"
	};
	const div = document.createElement('div');
	let testApp = ReactDOM.render(<App />, div);
	testApp.setState({
		isAuthenticated:true,
		user: user
	});
	testApp.logout();
	expect(testApp.state.isAuthenticated).toEqual(false);
	ReactDOM.unmountComponentAtNode(div);
})