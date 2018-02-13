const products = {
    phones: {
        apple: {
            name: "Apple",
            items: [
                {
                    name: 'Iphone X',
                    price: 1500,
                    amount: 33
                },
                {
                    name: 'Iphone 8',
                    price: 1200,
                    amount: 30
                },
                {
                    name: 'Iphone 7 Plus',
                    price: 1150,
                    amount: 22
                },
                {
                    name: 'Iphone 6S',
                    price: 820,
                    amount: 17
                }
            ]
        },
        samsung: {
            name: "Samsung",
            items: [
                {
                    name: "Samsung Galaxy S8",
                    price: 1100,
                    amount: 20
                },
                {
                    name: "Samsung Galaxy J7",
                    price: 400,
                    amount: 15
                },
                {
                    name: "Samsung Galaxy A7",
                    price: 470,
                    amount: 20
                },
                {
                    name: "Samsung Galaxy J1",
                    price: 90,
                    amount: 7
                }
            ]
        },
        sony: {
            name: "Sony",
            items: [
                {
                    name: "Sony Xperia X Dual Rose Gold",
                    price: 360,
                    amount: 28
                },
                {
                    name: "Sony Xperia XA1 Dual Black",
                    price: 220,
                    amount: 40
                },
                {
                    name: "Sony Xperia L2 Pink",
                    price: 250,
                    amount: 16
                },
                {
                    name: "Sony Xperia XA1 Ultra Dual White",
                    price: 300,
                    amount: 21
                }
            ]
        }

    },

    notebooks: {
        apple: {
            name: "Apple",
            items: [
                {
                    name: 'Macbook pro TB Retina',
                    price: 5000,
                    amount: 13
                },
                {
                    name: 'Macbook air',
                    price: 1800,
                    amount: 18
                },
                {
                    name: 'MacBook Pro Retina 13" Silver',
                    price: 4100,
                    amount: 12
                },
                {
                    name: 'MacBook Pro Retina 15" Space Gray',
                    price: 8000,
                    amount: 16
                }
            ]
        },
        asus: {
            name: "Asus",
            items: [
                {
                    name: 'Asus VivoBook Max Silver',
                    price: 900,
                    amount: 13
                },
                {
                    name: 'Asus Zenbook Pro',
                    price: 2700,
                    amount: 9
                },
                {
                    name: 'Asus ROG Strix',
                    price: 2800,
                    amount: 18
                },
                {
                    name: 'Asus F25GU445',
                    price: 1200,
                    amount: 31
                }
            ]
        },
        dell: {
            name: "Dell",
            items: [
                {
                    name: 'Dell Inspiron 5567 Gray',
                    price: 1250,
                    amount: 25
                },
                {
                    name: 'Dell Inspiron 7577 Black',
                    price: 2700,
                    amount: 36
                },
                {
                    name: 'Dell Vostro Gray',
                    price: 2100,
                    amount: 18
                },
                {
                    name: 'Dell Isabell',
                    price: 500,
                    amount: 30
                }
            ]
        }

    },

    popular: {
        apple: {
            name: "Apple",
            items: [
                {
                    name: 'Macbook pro TB Retina',
                    price: 5000,
                    amount: 13,
                    src: "../../img/macbook.jpg"
                },
                {
                    name: 'Iphone X',
                    price: 1500,
                    amount: 33,
                    src: "../../img/aphone_x.jpg"
                }
            ]
        }
    }
};

const users = {
    george: {name: 'George', password: 'test'},
    test: {name: 'Test', password: '1'}
};

let userEnter = {};