

function login(userInputEmail, userInputPassword) {
    
    
        for (let userCount = 0; userCount < databaseUsers.length; userCount++) {
    
            if (userInputEmail === databaseUsers[userCount].email && userInputPassword === databaseUsers[userCount].password) {
                console.log('We logged you in');
                // console.log(databaseUsers[userCount]._id.$oid);
            
            } else if (userInputEmail === databaseUsers[userCount].email) {
                console.log(`Sry wrong password`);  
            } else {
                console.log(`Sry we don't know ${userInputEmail}`);  
            } 
        }

        document.getElementById("form-stage").innerHTML = `<h1>Logged In</h1>`;
}