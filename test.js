

const data = '{"userID": [12345, 22222],   "age": 30,   "address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';


var jsonData = JSON.parse(data);

console.log(jsonData.userID); //mkyong




