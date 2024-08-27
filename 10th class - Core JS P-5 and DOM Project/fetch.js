const API = "https://jsonplaceholder.typicode.com/posts";

fetch(API)
        .then(response => {
            if(!response.ok) {
                throw new Error("HTTP error")
            }

            return response.json()
        })
        .then(data => console.log('API data', data))
        .catch(error => console.log('Error occurred', error))