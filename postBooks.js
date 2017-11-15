

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
                "book_isbn"          :       userInputBookISBN,   
                "book_owner"         :      {
                    
                 "book_user_id"           :       userID,
                 "book_owner_name"        :       userInputName,
                 "book_owner_last_name"   :       userInputLastName,
                 "book_owner_email"       :       userInputEmail
                
                }      

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
        