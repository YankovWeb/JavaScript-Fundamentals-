function main(password) {
    let passwordLength = password.length;

    let pattern = new RegExp("^(?=(.*[a-zA-Z]){6,})(?=(.*[0-9]){2,}).{6,}$");

    if (pattern.test(password)) {
        console.log("Password is valid")
    }
    if (passwordLength < 6 || passwordLength > 10) {
        console.log('Password must be between 6 and 10 characters')

    } else {


        console.log('Password must consist only of letters and digits')

    }


}

main('login2424')