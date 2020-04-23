import axios from 'axios'
import apiKey from './yelpApiKey'


// can use axios directly to make network request
// creating instance of axios instead, that has pre-set options assigned
// purpose of instance = code re-use?
export default axios.create({
    // following are pre-set options
    baseURL: "https://api.yelp.com/v3/businesses/",
    // following is request header, give auth
    headers: {
        Authorization: 'Bearer' + apiKey
    }
})