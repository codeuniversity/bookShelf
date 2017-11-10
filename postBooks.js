


function getBookInput() {
    
        let userInputBookName = document.getElementById('user-input-book-name').value;
        let userInputBookAuthor = document.getElementById('user-input-book-author').value;
        let userInputBookDescription = document.getElementById('user-input-book-description').value;
        let userInputBookCategory = document.getElementById('user-input-book-category').value;
        let userInputBookSubcategory = document.getElementById('user-input-book-subcategory').value;
        let userInputBookISBN = document.getElementById('user-input-book-isbn').value;
   
        postBook(userInputBookName, userInputBookAuthor, userInputBookDescription, userInputBookCategory, userInputBookSubcategory, userInputBookISBN)
    }
    


function postBook(userInputBookName, userInputBookAuthor, userInputBookDescription, userInputBookCategory, userInputBookSubcategory, userInputBookISBN) {
    $.ajax({
        url: getBooks,
        async: false,
        data: JSON.stringify({
                "book_ID"            :       4,
                "book_name"          :       userInputBookName,
                "book_author"        :       userInputBookAuthor,
                "book_description"   :       userInputBookDescription,
                "book_category"      :       userInputBookCategory,
                "book_subcategory"   :       userInputBookSubcategory,
                "book_isbn"          :       userInputBookISBN

            }),
            type: 'POST',
            contentType: 'application/json',
            sucess: function(data) {    
            },
            error: function(xhr, status, err) {
            console.log(err);
            }
            });
        }
        