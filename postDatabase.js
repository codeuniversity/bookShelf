


function getInput() {

    let userInputName = document.getElementById('user-input-name').value;
    
    $.ajax({
        url: getUsers,
        async: false,
        data: JSON.stringify({
            "user_ID"           :       4,
            "first_name"        :       userInputName,
            "last_name"         :       "Panzer",
            "email"             :       "kim@beispiel.de"
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






          