


function postUser(userInputName, userInputLastName, userInputEmail, userInputPassword) {
    $.ajax({
        url: getUsers,
        async: false,
        data: JSON.stringify({
            "first_name"        :       userInputName,
            "last_name"         :       userInputLastName,
            "email"             :       userInputEmail,
            "password"          :       userInputPassword       
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
