function validateSing (name, password) {
    Object.keys(users).reduce((previousVal, currentVal) => {
        if(currentVal === name){
            // Нашли совпадение в базе имен

            console.log(previousVal,currentVal);
        }
    });
}