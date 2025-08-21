// JSON stands for JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page
// JSON is "self-describing" and easy to understand
let promise = fetch("https://goweather.herokuapp.com/weather/Ny");// it is also a promise


// promise.then((response) =>{ // response is the resolved value of the promise
//     console.log(response); // also it is a Response object
//     console.log(response.status);
//     console.log(response.ok);
//     console.log(response.headers);
//     // return response.text(); // response is promise
//     return response.json();//response is promise

// }).then((value) => {
//     console.log(value); // it give the response in json format
//     //response.text is used then it give a string
//     console.log(value.temperature);
//     console.log(value.forecast);
//     console.log(value.wind);
// })


const getFacts = async () => {
    let response = await  promise;
    console.log(response); // Response object
    let data = await response.json(); // make it readable data
    console.log(data); // JSON format
    weather.innerText = ("Temperature: " + data.temperature); // display temperature
}

//Http : hyper text transfer protocol