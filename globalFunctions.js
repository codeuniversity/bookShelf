
let userInputName;
let userInputLastName;
let userInputEmail;
let userID;

let userInputBookAuthor;
let userInputBookCategory;
let userInputBookDescription;
let userInputBookISBN;
let userInputBookName;
let userInputBookSubcategory;


function getLogin() {

        userInputEmail = document.getElementById('user-input-email').value;
        let userInputPassword = document.getElementById('user-input-password').value; 
        
        login(userInputEmail, userInputPassword);
        
}


function getRegister() {
    
    userInputName = document.getElementById('user-input-name').value;
    userInputLastName = document.getElementById('user-input-lastname').value;    
    userInputEmail = document.getElementById('user-input-email').value;
    let userInputPassword = document.getElementById('user-input-password').value; 
            
    postUser(userInputName, userInputLastName, userInputEmail, userInputPassword);            
}


function getBook() {
    
    userInputBookName = document.getElementById('user-input-book-name').value;
    userInputBookAuthor = document.getElementById('user-input-book-author').value;
    userInputBookDescription = document.getElementById('user-input-book-description').value;
    userInputBookCategory = document.getElementById('user-input-book-category').value;
    userInputBookSubcategory = document.getElementById('user-input-book-subcategory').value;
    userInputBookISBN = document.getElementById('user-input-book-isbn').value;
   
        postBook(userInputBookName, userInputBookAuthor, userInputBookDescription, userInputBookCategory, userInputBookSubcategory, userInputBookISBN)
    }








