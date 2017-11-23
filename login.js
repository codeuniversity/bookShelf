

function login(userInputEmail, userInputPassword) {
    
    let passwordCheck = true;
    
        for (let userCount = 0; userCount < databaseUsers.length; userCount++) {
    
            if (userInputEmail === databaseUsers[userCount].email && userInputPassword === databaseUsers[userCount].password) {
                console.log('We logged you in');
                userInputName = databaseUsers[userCount].first_name;
                userInputLastName = databaseUsers[userCount].last_name;
                userID = databaseUsers[userCount]._id.$oid;
                passwordCheck = true;
                break;
            
            } else if (userInputEmail === databaseUsers[userCount].email) {
                console.log(`Sry wrong password`); 
                passwordCheck = false; 
            } else {
                console.log(`Sry we don't know ${userInputEmail}`); 
                passwordCheck = false; 
            } 
        }
        console.log(passwordCheck);

            if (passwordCheck === true) {

        document.getElementById("form-stage").innerHTML =
        `
        <form onsubmit="return false;">
        <input placeholder="Give me the name of your book" type="text" id="user-input-book-name">
        <input placeholder="Give me the author's name" type="text" id="user-input-book-author">
        <input placeholder="Tell me what the book's about" type="text" id="user-input-book-description">
        <input placeholder="Put your book into a category" type="text" id="user-input-book-category">
        <input placeholder="Find a subcategory as well" type="text" id="user-input-book-subcategory">
        <input placeholder="Give us the book's ISBN" type="text" id="user-input-book-isbn">
        <button onclick="getBook()">add book</button>
    </form>
        `;
        }

}