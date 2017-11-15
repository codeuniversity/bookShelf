
    


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
        