//Petfinder 


import React, { Component } from "react"; 

var key = 'RWN8nqUXpE5xurws5O74QlwvuQAYdGFFI5ML0Vety7K9huYQWq';
var secret = 'TtAbH0n0trOlEYjVb2Zy6TFJ9GgI1qW5z0qR7jXA';
var org = 'RI77';
var status = 'adoptable';
class PetFinder extends Component {
  state = {
    myPets: [],
  }


  
  
componentDidMount(){
fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {

	// Return the response as JSON
	return resp.json();

}).then(function (data) {

	// Log the API data
  console.log('token', data);


	// Return a second API call
	// This one uses the token we received for authentication
	return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/json'
		}
	});

}).then(function (resp) {
console.log("I AM resp " + resp)
	// Return the API response as JSON
	return resp.json();

}).then(function (data) {
console.log("I AM DATA "+ data)
	// Log the pet data
  console.log('pets', data);
  

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
}

render() {
  return (
    
        <>
        <h1>Hello</h1>
        </>
     
  );
}
}

export default PetFinder;
