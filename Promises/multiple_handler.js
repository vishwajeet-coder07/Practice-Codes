let p1 = new Promise((resolve, reject) => {
        alert("Hey I am not resolved")
        setTimeout(() => {
                resolve(1);
        }, 2000)
})

p1.then(() => {
        console.log("Hurray")
        return new Promise((resolve, reject) => { // this is called chaining of promises by pass by value or error from then and catch handler
                setTimeout(() => {
                        resolve(4)
                }, 6000)
        })
}).then((value) => { console.log(value) })

p1.then(() => {
        console.log("Congratulations this promise is now resolved")
})
