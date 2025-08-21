// What is Api?
// Api stands for Application Programming Interface
// Api is a set of rules and protocols for building and interacting with software applications
// Api allows different software programs to communicate with each other
// Api can be used to access web-based services and resources
// Api can be used to retrieve data from a server or send data to a server.


// Post request =>
const createTodo = async (todo) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
        //convert valid javascript obj to string
            // on the other hand JSON.parse vice versa
            
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options) // simple api call to jsonplaceholder to get todo item
    let response = await p.json();
    return response; // this returns the promise

    // if we don't use options it will take get as default option automatically
}
const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id); // simple api call to jsonplaceholder to get todo item
    let data = await response.json();
    return data;
}
const mainfunc = async () => {
    let todo = {
        title: 'Learning',
        body: 'JavaScript',
        userId: 1
    };
    let todor = await createTodo(todo); //
    console.log(todor);
    console.log(await getTodo(5)); // this will return the todo item with id 1
}

mainfunc();
// async always returns a promise