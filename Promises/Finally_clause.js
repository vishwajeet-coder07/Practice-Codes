// try and catch may have one or more code clauses : finally
const f = () => {
        try {
                let a = 0;
                // console.log(program)
                console.log("Program ran successfully")
                return
        }
        catch (err) {
                console.log("This is an error")
                console.log(p)
        }
        finally {
                console.log("I am a good boy")
                // Close the file
                // Exit the Loop
                // Write to the log file
        }
}
// Also finally work with async/await , try and catch .
// With async/await, you can use try/catch/finally to handle errors in asynchronous code.
let asyncFunction = async () => {
    try {
        let result = await someAsyncOperation();
        console.log(result);
    } catch (error) {
        console.log("Error occurred:", error);
    } finally {
        console.log("Cleanup code");
    }
};

asyncFunction();
f();
console.log("End");
// finally will run in all cases
// It is used for cleanup code like closing files or releasing resources...
// it will run any condition