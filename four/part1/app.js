var password = "iwrupvqb";

var number = 1;

while(true) {
    var complete_password = password + number;
    var hashed_password = hash(complete_password);

    if (hashed_password.substring(0,5) == '00000') {
        console.log(number);
        break;
    }

    number++;
}
