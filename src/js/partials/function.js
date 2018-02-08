function validateSing (name, password) {
    let validateLog = Object.keys(users).some(validateLogin);
    const loginVal = name.val();

    if (validateLog) {
        //

        name.addClass('is-valid');
        name.removeClass('is-invalid');
        console.log('Логин правильный');

        if(users[loginVal].password === password.val()){
            // Проходем вход, прячем форму

            //$('.actions').text('');
            password.removeClass('is-invalid');
            console.log(users[loginVal]);
            console.log('enter');
        } else {
            //

            password.addClass('is-invalid');
            console.log('Не правильный пароль');
        }

    } else {
        //

        name.removeClass('is-valid');
        name.addClass('is-invalid');
        console.log('Не правильный логин');
    }

}

function validateLogin (val) {
    return $('#login').val() === val
}

function validatePassword (val) {
    return $('#password').val() === val
}

