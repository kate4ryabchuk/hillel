// вход в аккаунт, после проверки логина и пароля
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

// проверка пароля
function validateLogin (val) {
    return $('#login').val() === val
}

// проверяем sessionStorage
function getUserStory () {
    const userStory = JSON.parse(sessionStorage.getItem('userEnter'));

    if (userStory) {
        const name = userStory.name.toLowerCase();

        addAccount(name);

        console.log(users[name]);
    }
}

// отображаем аккаунт
function addAccount (user) {
    $('.account').text('').append($('<h4>Аккаунт</h4>'), $(`<h3>${users[user].name}</h3>`));
}

// добовляем компании
function addCompany (userCompany) {
    const parent = $('#navbar').find('.dropdown-menu');
    parent.text('');

    Object.keys(products[userCompany]).map(company => {
        const itemCompany = $(`<a class="dropdown-item" href="#" data-category=${userCompany} data-company="${company}">${products[userCompany][company].name}</a>`);
        itemCompany.click(function (e) {
            showItem(e);
        });
        parent.append(itemCompany);
    });
    const itemAll = $(`<a class="dropdown-item" href="#">All</a>`);
    parent.prepend(itemAll);
}

// отображаем популярные товары
function showPopularProd () {
    Object.keys(products.Popular).map(company => {
        const parent = $('.products .out-item'),
              h4 = $(`<h6>${products.Popular[company].name}</h6>`);

        parent.append(h4);
        products.Popular[company].items.map((item, index) => {
            createItem(item, index, 'Popular', products.Popular[company].name.toLowerCase());
        });
    });
}

// отображаем категории
function showCategory () {
    const parent = $('#navbar').find('.nav');
    // тут костили))
    Object.keys(products).map(category => {
        const categoryItem = $(`<li class="nav-item"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">${category}</a><div class="dropdown-menu"></div></li>`).mousemove(function () {
            addCompany(category);
        });
        parent.append(categoryItem);
    });
}

// фильтрация товаров
function showItem (e) {
    const parentBlock = $('.products .out-item'),
          category = $(e.target).attr('data-category'),
          company = $(e.target).attr('data-company');

    parentBlock.text('');
    $('.products h4').text(category);
    products[category][company].items.map((item, index) => {
        createItem(item, index, category, company);
    });
    parentBlock.prepend($(`<h6>${products[category][company].name}</h6>`));
}

// создание блока товара
function createItem (item, index, category, company) {
    const parent = $('.products .out-item'),
          itemBlock = $(`<div class="col-3 item"></div>`),
          itemBody = $(`<div class="body"><img src="${item.src}"><span>${item.name}</span><br><span>$${item.price}</span></div>`),
          itemBtn = $('<div class="row btns"><button class="btn bg-info btn-sm">В корзину</button><button class="btn bg-warning btn-sm">Оформить заказ</button></div>');
    itemBlock.append(itemBody, itemBtn);
    itemBlock.attr({
        'data-category': category,
        'data-compmany': company,
        'data-index': index
    });
    parent.append(itemBlock);
}

// образец прохода по продуктам
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