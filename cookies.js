//cookies are small strings data that stored directly in the user's browser
//cookies are used to remember information about the user
//cookies are sent to the server with every request
//cookies can be used to store user preferences, session information, and other data
//cookies have an expiration date and can be deleted by the user

// alert(document.cookie); // this will show all the cookies stored in the browser

console.log(document.cookie); // this will log all the cookies stored in the browser
document.cookie = "username=JohnDoe;"; // this will create a cookie with the name "username" and the value "JohnDoe"
document.cookie = "username=JohnDoe hello; expires=Fri, 31 Dec 2027 23:59:59 GMT;"; // this will create a cookie with the name "username" and the value "JohnDoe" that will expire on 31st December 2027
console.log(document.cookie);

let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; `// encode uri used encode keys like $%#%$#^++=- and values like $%#%$#^++=- to make them valid
console.log(document.cookie);

// we can not able to save multiple cookies with the same name
// also, cookies are limited to 4KB in size
// also, cookies not save multiple key value pairs at once