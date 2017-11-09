

// Setting up variables for later use
let databseBooks;
let databseUsers;

// Save URL for ajax call
const getBooks = 'https://api.mlab.com/api/1/databases/booklend/collections/Book?apiKey=Dmb80JOwPSsa2sfnvbP7HAOR5eqKGt2A';
const getUsers = 'https://api.mlab.com/api/1/databases/booklend/collections/User?apiKey=Dmb80JOwPSsa2sfnvbP7HAOR5eqKGt2A';


// the URL = placeholder for URL / Callback = placholder for database / asynchronous = false because of code jumping
function httpGetAsync(theUrl, callback, asynchronous)
{

    // xmlHttp = response from server
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          callback(this);
        }

    }
    xmlHttp.open("GET", theUrl, asynchronous); // true for asynchronous
    xmlHttp.send();

};





function callbackBooks(xhttp) {

  databaseBooks = JSON.parse(xhttp.responseText);

  // database.push(2);

};


function callbackUsers(xhttp) {
    
      databaseUsers = JSON.parse(xhttp.responseText);
    
      // database.push(2);
    
    };


// function call
httpGetAsync(getBooks, callbackBooks, false);
httpGetAsync(getUsers, callbackUsers, false);



console.log(databaseBooks);
console.log(databaseUsers);

console.log(databaseBooks["0"].books["1"].book_author);





// Comments and POST cheatSheet


/* 

https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp



        $.ajax({
          url: postInvoice,
          data: JSON.stringify({
            "invoiceNumber"             : invoiceNumber,
            "invoiceTotal"              : invoiceTotal,
            "invoicePrimaryTotalTax"    : invoicePrimaryTotalTax,
            "invoiceSecondaryTotalTax"  : invoiceSecondaryTotalTax,
            "invoiceTotalTax"           : invoiceTotalTax,
            "itemListing"               : itemListing,
            "invoiceTimeStamp"          : invoiceTimeStamp,
            "invoiceTimeReadable"       : invoiceTimeReadable,
            "invoiceDateReadable"       : invoiceDateReadable,
          }),
          type: 'POST',
          contentType: 'application/json',
          sucess: function(data) {
          },
          error: function(xhr, status, err) {
            console.log(err);
          }
        });


*/




