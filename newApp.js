import React from 'react'

var key = 'RWN8nqUXpE5xurws5O74QlwvuQAYdGFFI5ML0Vety7K9huYQWq';
var secret = 'TtAbH0n0trOlEYjVb2Zy6TFJ9GgI1qW5z0qR7jXA';
var org = 'RI77';
var status = 'adoptable';
class NewApp extends React.Component {
    state = {
        myPets: [],
    }
    
    componentDidMount(){
   const auth = () => {
        fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (resp){
            return resp.json();
        }).then(function (data){
            console.log('token', data)
        })
    }
    auth();
    







    fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/json'
		}
	}).then(function (resp){
        return resp.json();
    }).then(function (data){
        console.log('pets', data)
    }).catch(function(err){
        if(!err){
            console.log("You're good to go")
        } else {
            console.log('Something went wrong '+ err)
        }
    })





}


    render() {
        return (
            <div>
                <h1>HEY YOU FUCK HEAD</h1>
            </div>
        )
    }
}

export default NewApp
