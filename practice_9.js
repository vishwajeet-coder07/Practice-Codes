// const loadScript = async (src) => {
//         return new Promise((resolve, reject) => {
//                 let script = document.createElement("script")
//                 script.src = src
//                 script.onload = () => {
//                         resolve(src + " Done success")
//                 }
//                 // Onload is used to detect when the script has finished loading
//                 document.head.append(script);
//         })
//}


//Problem number 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// a.then((value) => {
//         console.log(value);
// })



// Problem number 2
// const main2 = async () => {
//         console.log(new Date().getMilliseconds())
//         let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")// calling and passing value to loadscript at same time 
//         // await is used to wait for the promise to resolve
//         // get the value of loadscript
//         console.log(a)
//         console.log(new Date().getMilliseconds())
// }
// main2()



// Problem number 3
let p = () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        reject(new Error("Please this is not acceptable"))
                }, 3000)
        })
}

let a = async () => {
        try {
                let c = await p()
                console.log(c)
        }
        catch (err) {
                console.log("This error has been handled")
        }
}
a()
//Problem number 4 :
    console.log(new Date().getMilliseconds())
let p1 = () =>{
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000)
    })
}
let p2 = () =>{
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(20);
        }, 2000)
    })
}
let p3 = () =>{
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(10);
        }, 3000)
    })
}
const run = async () => {
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    // console.log(a1, a2, a3);
 // Taking only 6 point something time for completion because process synchronously

    let all = await Promise.all ([p1(), p2(), p3()]);
    //Calling and pass value to await together
    // Taking only 3 point something time for completion because process concurrently
    console.log(all);
       console.log(new Date().getMilliseconds()) // Example: 1234
}
run();
