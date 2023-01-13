
/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

    let hamburgers = 4;
    let fries = 1;

    if (hamburgers >= 4 && fries >= 1) {
        console.log("Ми поїли")
    } else console.log("Ми йдемо в інше кафе")

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/ 

    let itemPrice = 100;

    if (itemPrice >= 1000 && itemPrice <= 1900) {
        console.log(itemPrice + " - знаходиться між 1000 та 1900 включно")
    } else console.log(itemPrice + " - не знаходиться між 1000 та 1900 включно")

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/ 

    let itemPrice2 = 100;

    if (!(itemPrice2 < 1000 || itemPrice2 > 1900)) {
        console.log(itemPrice2 + " - знаходиться між 1000 та 1900 включно")
    } else console.log(itemPrice2 + " - не знаходиться між 1000 та 1900 включно")


    let itemPrice3 = 1901;

    if (itemPrice3 < 1000 || itemPrice3 > 1900) {
        console.log(itemPrice3 + " - не знаходиться між 1000 та 1900 включно")
    } else console.log(itemPrice3 + " - знаходиться між 1000 та 1900 включно")

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/ 
    
    let seasonNumber = 2;

    if (seasonNumber == 1) {
        console.log("winter")
    } else if (seasonNumber == 2) {
        console.log("spring")
    } else if (seasonNumber == 3) {
        console.log("summer")
    } else if (seasonNumber == 4) {
        console.log("autumn")
    } else {
        console.log("Such season does not exist")
    }

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/ 

    let a = 20;
    let b = 10;
    let c = 15;

    if (a > b && a < c) {
        console.log(a + " - середнє значення")
    } else if (b > a && b < c) {
        console.log(b + " - середнє значення")
    } else if (c > b && c < a) {
        console.log(c + " - середнє значення")
    }

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

    let dayOfAWeek = 8;

    if (dayOfAWeek > 7 || dayOfAWeek < 1) {
        console.log("Such day of a week does not exist")
    } else {
        switch (dayOfAWeek) {
            case 1:
            console.log ("Monday")
            break

            case 2:
            console.log ("Tuesday")
            break               

            case 3:
            console.log ("Wednesday")
            break

            case 4:
            console.log ("Thursday")
            break

            case 5:
            console.log ("Friday")
            break

            case 6:
            console.log ("Saturday")
            break

            case 7:
            console.log ("Sunday")
            break
        }
    }

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

    let a1 = 10;
    let b1 = 5;
    let mathOperation = "+";

    switch (mathOperation) {
        case "+":
        console.log(a1 + b1)
        break

        case "-":
        console.log(a1 - b1)
        break 
        
        case "*":
        console.log(a1 * b1)
        break

        case "/":
        console.log(a1 / b1)
        break
    }

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

    let str = "Hello world";    
    let newStr = str.split('').filter(letter => !['a','e','i','o','u','y'].includes(letter.toLowerCase())).join('');
    console.log(newStr)
    
/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/
