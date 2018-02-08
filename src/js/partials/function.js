function validateSing (name, password) {
    let validateLog = Object.keys(users).some(validateLogin);
    const loginVal = name.val();

    if (validateLog) {
        //

        name.addClass('is-valid').removeClass('is-invalid');
        console.log('Логин правильный');

        if(users[loginVal].password === password.val()){
            // Проходем вход, прячем форму

            $('.account').text('').append($('<h4>Аккаунт</h4>'), $(`<h3>${users[loginVal].name}</h3>`));

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

        name.removeClass('is-valid').addClass('is-invalid');
        console.log('Не правильный логин');
    }

}

function validateLogin (val) {
    return $('#login').val() === val
}
