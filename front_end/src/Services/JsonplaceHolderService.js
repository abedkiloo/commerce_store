class JsonplaceHolderService {
    static getPosts = () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const request = {
            method: "GET"
        };
        return fetch(url, request).then(response => {
            return response.json()
        }).catch(error => {
            throw(error)
        })
    };

    static createPosts = postData => {
        const url = 'https://jsonplaceholder.typicode.com/posts';

        const request = {
            method: "POST", headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        };

        return fetch(url, request).then(response => {
            console.log(response)
          return   response.json()
        })
            .catch(error => {
                throw(error)
            })
    }
}

export default JsonplaceHolderService
