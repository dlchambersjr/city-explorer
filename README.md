# City Explorer

## Author: David Chambers/Code Fellows Instruction team

## Links and Resources
* [repo](https://github.com/dlchambersjr/city-explorer)
* [deployed site](http://dc-city-explorer.s3-website-us-west-2.amazonaws.com/)

## Containers
### `app.js`
app.js is the central hub for all the various components in the app.  It provides a form to receive the search location and then retrieves the requested location's information from each API. The retrieved information is then rendered by the relevant components.
#### Exported Values and Methods
* `handleSubmit(arity 1)` - Receives the form input from the form container and uses it to retrieve the map and geo-location information from the Google API.
* `getResource(arity 2)` - Receives a path and the location data generated from the Google API call. Retrieves the API data and updates state.

### `form.js`
form.js renders the input form that collects the location to be searched for in the APIs. It returns the form input to the handleSubmit method in app.js.  

## Components
### `header.js`
Exports a class that renders the title and instructional statement.

### `darksky.js`
exports a class that renders the DarkSky API information.

### `yelp.js`
exports a class that renders the Yelp API information.

### `meetup.js`
exports a class that renders the Meetup API information.

### `movies.js`
exports a class that renders the The Movies API  information.

### `trails.js`
exports a class that renders the Hiking Project API information.


### Setup

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns the landing page.


#### Tests
* No tests were required for this app

#### UML
[City-explorer](https://github.com/dlchambersjr/city-explorer/blob/master/src/assets/city-explorer-uml.png)
