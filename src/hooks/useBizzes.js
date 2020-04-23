import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [bizzes, setBizzes] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // initiates API request
    // when we make an API request / any kind of network request = asychronous operation
    // so we need to add promise or something for results we get back
    const searchApi = async (searchTerm) => {
        try {
            // alternative to params parameter, add to query string like so /search?limit:50
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'new york city'
                }
            })
            setBizzes(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, bizzes, errorMessage]
}