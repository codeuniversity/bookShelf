

function login(userInputEmail, userInputPassword) {
    
        //
        for (let userCount = 0; userCount < databaseUsers.length; userCount++) {
            //login successful if email and password are in database

            if (userInputEmail === databaseUsers[userCount].email && userInputPassword === databaseUsers[userCount].password) {
                console.log('We logged you in');

                userInputName = databaseUsers[userCount].first_name;
                userInputLastName = databaseUsers[userCount].last_name;
                //userInputEmail = userInputEmail (leave out because already defined; only way to get to this func)
                userID = databaseUsers[userCount]._id.$oid;

                console.log(userInputName, userInputLastName, userID);

            //error if password/email is wrong
            } else if (userInputEmail === databaseUsers[userCount].email) {
                console.log(`Sry wrong password`);  
            } else {
                console.log(`Sry we don't know ${userInputEmail}`);  
            } 
        }
}