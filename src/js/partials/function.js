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

function addPopularItems () {

    Object.keys(products).map(category => {
        // заходим в категории
        //console.log(Object.keys(products[category]));

        console.log(category);

        Object.keys(products[category]).map(company => {
            // заходим в компании
            //console.log(products[category][company]);

            products[category][company].items.map(item => {
                // заходим в товары

                //console.log(item);
            });
        });
    });

}

function showPopularProd () {
    Object.keys(products.popular).map(company => {
        console.log(products);
        const parent = $('.popular-products .out-item');
        const h4 = $(`<h6>${products.popular[company].name}</h6>`);
        parent.append(h4);

        products.popular[company].items.map((item, index) => {
            console.log(item);
            const parent = $('.popular-products .out-item');
            const itemBlock = $(`<div class="col-3 item"></div>`);
            const itemBody = $(`<img src="${item.src}"><span>${item.name}</span><br><span>$${item.price}</span>`);
            const itemBtn = $('<div class="row btns"><button class="btn bg-info btn-sm">В корзину</button><button class="btn bg-warning btn-sm">Оформить заказ</button></div>');
            itemBlock.append(itemBody, itemBtn);
            itemBlock.attr({'data-category':'popular', 'data-compmany': products.popular[company].name.toLowerCase(), 'data-index': index});
            parent.append(itemBlock);
        });

    });
}
