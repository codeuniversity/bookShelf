


function getInput() {

    let userInputName = document.getElementById('user-input-name').value;
    let userInputLastName = document.getElementById('user-input-lastname').value;
    let userInputEmail = document.getElementById('user-input-email').value;
    
    $.ajax({
        url: getUsers,
        async: false,
        data: JSON.stringify({
            "user_ID"           :       4,
            "first_name"        :       userInputName,
            "last_name"         :       userInputLastName,
            "email"             :       userInputEmail
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






          