// Create variables to store local variables grabbed
var rlname;
var rlage;
var rlcolor;
var userInfo = [];

// Create reading interface
const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

// Ask a question
function getUserInput()
{
    // FIRST QUESTION
    rl.question("What is your name? \n", (name) => {
        rlname = name;
        
        // SECOND QUESTION
        rl.question("What is your age? \n", (age) => {
            rlage = age;
            
            // THIRD QUESTION
            rl.question("What is your favorite color? \n", (color) => {
                rlcolor = color;

                // LOG DATA
                console.log("Hello " + rlname + ", you are " + rlage + " years old and your favorite color is " + rlcolor + ".");
                
                // CLOSE CONNECTION
                pushUserArray();
                anotherUser();
            })
        })
    })
}

function pushUserArray()
{
    var user = {
        name : rlname,
        age : rlage,
        color : rlcolor
}

    userInfo.push(user);
    console.log(userInfo);
}

getUserInput();

function anotherUser()
{
    rl.question("Would you like to create another user? Y/N \n", (answer) => {
        if (answer == "Y")
        {
            getUserInput();
        } 
        else if (answer == "N")
        {
            console.log("Closing application.")
            rl.close();
        }
        else
        {
            console.log("Not a valid option please try again.")
            anotherUser();
        }
    })
}