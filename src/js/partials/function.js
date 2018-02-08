function validateSing (name, password) {
    let validateLog = Object.keys(users).some(validateLogin);
    const loginVal = name.val();

    if (validateLog) {
        //

        name.addClass('is-valid').removeClass('is-invalid');
        console.log('Логин правильный');

        if (users[loginVal].password === password.val()) {
            // Проходем вход, прячем форму

            addAccount(loginVal);

            userEnter = users[loginVal];
            sessionStorage.setItem('userEnter', JSON.stringify(userEnter));

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

function getUserStory () {
    const userStory = JSON.parse(sessionStorage.getItem('userEnter'));

    if (userStory) {
        const name = userStory.name.toLowerCase();

        addAccount(name);

        console.log(users[name]);
    }
}

function addAccount (user) {
    $('.account').text('').append($('<h4>Аккаунт</h4>'), $(`<h3>${users[user].name}</h3>`));
}
