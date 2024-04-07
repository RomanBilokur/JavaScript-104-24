//                 !!!! Розгалуження !!!!
//            ---- if -----

// if (condition) {
//   // код, який виконується, якщо умова (condition) істинна
// }

// if (condition) {
//   condition;
// }
// console.log();

// let price = 1;
// // const subscription = "pro";
// const subscription = "free";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100

//
// let price = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 0

//             !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Доповни код функції checkAge(age) так,
// щоб функція повертала рядок "You are an adult",
// якщо значення параметра age більше або дорівнює 18.
// Використай у тілі функції інструкцію if для перевірки значення age.

// Оголошена функція checkAge(age)
// Виклик checkAge(20) повертає рядок "You are an adult"
// Виклик checkAge(17) повертає undefined
// Виклик checkAge(10) повертає undefined
// Виклик checkAge(30) повертає рядок "You are an adult"
// Виклик функції з випадковими, але валідними аргументами,
// повертає правильне значення

// function checkAge(age) {
//   if (age >= 18) {
//     return `You are an adult`;
//   }
// }
// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(10));
// console.log(checkAge(30));
// console.log(checkAge(17.5));

//             ----- Інструкція if...else -----
// if (condition) {
// код, який виконується, якщо умова істинна
// } else {
// код, який виконується, якщо умова хибна
// }
//
// const grade = 85;
// const grade = 40;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }
// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

//           !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!
//
// Функція checkStorage(available, ordered)
// перевіряє можливість оформлення замовлення
// і повертає повідомлення про результат.
// Вона оголошує два параметри, значення
// яких будуть задаватися під час її виклику:

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні вказане число,
// яке перевищує доступну кількість товарів на складі,
// функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок
// "Order is processed, our manager will contact you"
// Оголошена функція checkStorage(available, ordered).
// Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you"
// Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you"
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return `Not enough goods in stock!`;
//   } else {
//     return `Order is processed, our manager will contact you`;
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//               ------Блок else...if -----

// if (condition_1) {
//   // код, який виконується, якщо умова (condition_1) істинна
// } else if (condition_2) {
//   // код, який виконується, якщо умова (condition_2) істинна
// } else if (condition_3) {
//   // код, який виконується, якщо умова (condition_3) істинна
// } else {
//   // код, який виконується, якщо всі умови хибні
// }

// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

//              !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція checkStorage(available, ordered) перевіряє можливість
// оформлення замовлення і повертає повідомлення про результат.
// Вона оголошує два параметри, значення яких будуть задаватися
// під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення
// параметра ordered дорівнює 0,
// функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі,
// то функція повертає
// рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція
// повертає рядок "The order is accepted, our manager will contact you".
// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(70, 0)повертає "There are no products in the order!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(150, 0) повертає "There are no products in the order!"
// Виклик checkStorage(80, 80) повертає "The order is accepted, our manager will contact you"

// function checkStorage(available, ordered) {
//   if ((available >= 0, ordered === 0)) {
//     return `There are no products in the order!`;
//   } else if (available < ordered) {
//     return `Your order is too large, there are not enough items in stock!`;
//   } else {
//     return `The order is accepted, our manager will contact you`;
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));

//                 ------ Тернарний оператор ------
// Він працює таким чином:
// обчислюється умова condition;
// якщо умова істинна (перетворюється до true), обчислюється вираз після ?;
// якщо умова хибна (перетворюється до false), обчислюється вираз після :;
// значення обчисленого виразу повертається як результат роботи тернарного оператора.

// const age = 20;
// // const type = age >= 18 ? "adult" : "child";
// // console.log(type); // 'adult'

// const type = age >= 18 ? "adult" : "child";
// console.log(type);

// const a = 5;
// const b = 10;
// // const biggerNumber = a > b ? a : b;

// // console.log(biggerNumber); // 10

// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber);

//              !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція checkPassword(password) порівнює переданий їй
// пароль (параметр password) зі збереженим
// паролем адміністратора (correctPassword)
// і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// Якщо значення password і correctPassword збігаються, функція повертала
// рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"
// Оголошена функція checkPassword(password)
// Використано тернарний оператор
// Виклик checkPassword("jqueryismyjam") повертає "Access granted"
// Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
// Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   const messega =
//     correctPassword === password
//       ? "Access granted"
//       : "Access denied, wrong password!";
//   return messega;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

//          ---- Оператор switch -----

// const fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }
// !!!порівнюється лише на сувору рівність !!!

//          ----- Оператор break -----
// const day = 1;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("This is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
//   default:
//     console.log("Invalid");
// }
// switch (day) {
//   case 1:
//   case 2:
//     console.log("This is a working day");
//     break;

//   default:
//     break;
// }

//      !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція getSubscriptionPrice(type) отримує рядок
// з типом передплати користувача (параметр type),
// перевіряє її на збіг з трьома можливими
// типами щомісячної передплати та повертає ціну,
// або повідомлення про неправильний тип передплати.

// Якщо значення параметра type — це рядок:

// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type
// повертається рядок "Invalid subscription type!".

// Використай оператор switch для розв'язання цієї задачі!

// Оголошена функція getSubscriptionPrice(type)
// Використано оператор switch
// Виклик getSubscriptionPrice("professional") повертає число 20
// Виклик getSubscriptionPrice("organization") повертає число 50
// Виклик getSubscriptionPrice("starter") повертає число 0
// Виклик getSubscriptionPrice("random") повертає рядок "Invalid subscription type!"
// Виклик getSubscriptionPrice("premium") повертає рядок "Invalid subscription type!"

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case `starter`:
//       return `0`;
//       break;
//     case `professional`:
//       return `20`;
//       break;
//     case `organization`:
//       return `50`;
//       break;

//     default:
//       return `Invalid subscription type!`;
//       break;
//   }
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));
// console.log(getSubscriptionPrice("premium"));

//   !!! Пам’ятка під час використання розгалужень !!!

// Наразі тобі знайомі кілька способів,
//  зробити розгалуження. Під час вибору слід пам’ятати:

// Інструкція if є універсальною.
// Інструкції if…else і else…if використовуються,
// коли потрібно прописати декілька умов. Отже,
// ці інструкції зазвичай довші, ніж інші способи
// розгалужень.

// Тернарний оператор краще використовувати
// для присвоєння або повернення значення з тіла функції.
//  В умові тернарного оператора може бути все що
//  завгодно: перевірка рівності / нерівності, на більше /
//   менше, просто перевірка на буль чого-небудь.

// Пам’ятай про обмеження: у нього має бути рівно
// 2 сценарії, не більше.

// Оператор switch перевіряє тільки на сувору рівність.
// Використовуючи оператор switch, завжди:
// — пам’ятай про оператор break
// — використовуй тільки 1 default, він завжди має бути
// останнім.

// const globalVar = "Global";

// console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if (true) {
//   const aVar = "A";
//   console.log(globalVar); // Доступ до globalVariable з блоку A
//   console.log(aVar); // Доступ до aVar з блоку A
//   // Немає доступу до bVar і cVar

//   if (true) {
//     const bVar = "B";
//     console.log(globalVar); // Доступ до globalVariable з блоку B
//     console.log(aVar); // Доступ до aVar з блоку B
//     console.log(bVar); // Доступ до bVar з блоку B
//     // Немає доступу до cVar
//   }
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if (true) {
//   const cVar = "C";
//   console.log(globalVariable); // Доступ до globalVar з блоку C
//   console.log(cVar); // Доступ до cVar з блоку C
//   // Немає доступу до aVar і bVar
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

//         ----- Логічні оператори -----

//                   ----   Числа ----
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true

// if (null) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

// if (0) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

// if (10) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

//                -----     Рядки   -----
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

// Запам’ятай 6 випадків, які приводяться до false:
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. underfined
// 6. false

//         ---- Логічне «І» &&  -----

// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"

// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"

// console.log(3 && true); // true
// console.log(true && 3); // 3

// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// console.log(3 && false); // false
// console.log(false && 3); // false

// console.log(0 && ""); // 0
// console.log("" && 0); // ""

// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false

//               !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція isNumberInRange(start, end, number) перевіряє,
// чи входить число у проміжок. Вона оголошує три параметри,
// значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином,
// щоб вона повертала результат входження number у числовий проміжок від start
// до end включно. Тобто число повинно бути
// одночасно і більшим або дорівнювати start,
// і меншим або дорівнювати end. Результатом виклику функції має бути буль
// true або false.

// Оголошена функція isNumberInRange(start, end, number)
// Використано оператор &&
// Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false
// Виклик isNumberInRange(20, 50, 24) повертає true
// Виклик isNumberInRange(20, 50, 76) повертає false

// function isNumberInRange(start, end, number) {
//   const numb = start <= number && number <= end;
//   return numb;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

//            --- Логічне «АБО» ||  -----

//        !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція checkAccess(subType) перевіряє,
// чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати.
// Використовуючи оператор "АБО",
// доповни код функції так,
// щоб якщо значення параметра subType
// дорівнює рядкам "pro" або "vip",
// то функція повертала true і користувач отримував доступ.
//  В іншому випадку повертала false.

// Оголошена функція checkAccess(subType)
// Використано оператор ||
// Виклик checkAccess("pro") повертає true
// Виклик checkAccess("starter") повертає false
// Виклик checkAccess("vip") повертає true
// Виклик checkAccess("free") повертає false

// function checkAccess(subType) {
//   const numb = subType === "pro" || subType === "vip";
//   return numb;
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));

//   -----    Логічне «НІ» !  ------

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true

// !true;
// !3;
// !"Mango";
// 0;
// "";
// null;

// console.log(!null);

// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// const isBlocked = true;
// const canChat = !isBlocked; // !false -> true;
// // !true -> false;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// // true && !false -> true && true -> true

// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

//      !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція toggleModalVisibility(isVisible)
// перемикає стан відображення модального вікна.
// У параметрі isVisible вона очікує буль true або false.
// Доповни код функції так, щоб вона повертала
// протилежне значення цього параметра.

// Оголошена функція toggleModalVisibility(isVisible)
// Виклик toggleModalVisibility(true) повертає false
// Виклик toggleModalVisibility(false) повертає true
// Використано оператор !

// function toggleModalVisibility(isVisible) {
//   const modalWind = !isVisible;

//   return modalWind;
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

//            ----- Властивості -----

// Властивості — це описові характеристики сутності.
// У прикладі з кавою — це колір, кількість цукру,
// температура.

//objectName.property - властивість;

// const message = "JavaScript is awesome";
// console.log(message.length); // 21

// const message = "Роман Іванович Білокур ";
// console.log(message.length);

//            ----- Методи ----

// Методи — це дії, які можна виконати із сутністю,
// такі як додати цукор чи підігріти

// objectName.method();

// const message = "JavaScript is awesome";
// console.log(message.toUpperCase()); //
//"JAVASCRIPT IS AWESOME"

// const message = "Роман Іванович Білокур ";
// console.log(message.toUpperCase());

//           --- Метод slice() ---

// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

// const fullName = "Василій Бураківський";
// console.log(fullName.slice(1, 9));

//        !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція getSubstring(string, length) приймає рядок
// і повертає новий підрядок (його часткову копію).
// Вона оголошує два параметри, значення яких будуть
// задаватися під час її виклику:

// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала
// новий підрядок, який починається від початку string
// і має довжину length.

// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає
// "Hel"
// Виклик функції getSubstring("Hello world", 5) повертає
// "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає
// "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає
// "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає
// ""

// function getSubstring(string, length) {
//   const strings = string;
//   const finString = strings.slice(0, length);

//   return finString;
// }

// // console.log(getSubstring("Hello world", 3));
// // console.log(getSubstring("Hello world", 5));
// // console.log(getSubstring("Hello world", 8));
// // console.log(getSubstring("Hello world", 11));
// // console.log(getSubstring("Hello world", 0));

//    ----- Методи toLowerCase() і toUpperCase() -----

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

// const message = "Василь Бураковський";
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message);

// const brandName = "samsung";
// const userInput = "saMsUng";
// const lowercaseInput = userInput.toLowerCase();

// console.log(brandName); // 'samsung'
// console.log(userInput); // 'saMsUng'
// console.log(userInput === brandName); // false
// console.log(lowercaseInput); // 'samsung'
// console.log(lowercaseInput === brandName); // true

// const brandName = "таврія";
// const userInput = "ТавРія";
// const lowercaseInput = userInput.toLowerCase();
// console.log(lowercaseInput);

//      !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція normalizeInput(input, to) оголошує два параметри:
// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями:
// "upper" або "lower", що вказують до якого регістру
// потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper",
// то функція повертала копію рядка input,
// але у верхньому регістрі
// В іншому разі, функція повертала копію рядка
// inputу нижньому регістрі
// Оголошена функція normalizeInput(input, to)
// Виклик функції normalizeInput("This ISN'T SpaM", "lower")
// повертає "this isn't spam"
// Виклик функції normalizeInput("This ISN'T SpaM", "upper")
// повертає "THIS ISN'T SPAM"
// Виклик функції normalizeInput("Big SALE", "lower")
// повертає "big sale"
// Виклик функції normalizeInput("Big SALE", "upper")
// повертає "BIG SALE"
// Виклик функції normalizeInput("Stay Awhile and Listen", "lower")
// повертає "stay awhile and listen"
// Виклик функції normalizeInput("Stay Awhile and Listen", "upper")
// повертає "STAY AWHILE AND LISTEN"

// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else if (to === "lower") {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));

// function checkStorage(available, ordered) {
//   if ((available >= 0, ordered === 0)) {
//     return `There are no products in the order!`;
//   } else if (available < ordered) {
//     return `Your order is too large, there are not enough items in stock!`;
//   } else {
//     return `The order is accepted, our manager will contact you`;
//   }
// }

//       ----- Метод includes() -----

//       !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція checkForName(fullName, firstName) приймає два
// параметри та повертає буль true або false - результат
// перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала
// результат перевірки входження імені (параметр firstName),
// у повне ім'я (параметр fullName).
// Врахуй, що регістр символів в параметрах fullName
// і firstName наперед не відомий. Перед перевіркою входження
// не забудь прирівняти їх до однакового регістру.

// Оголошена функція checkForName(fullname, firstName)
// Виклик функції checkForName("Jason Neis", "Jason") повертає
// true
// Виклик функції checkForName("Jason Neis", "jAsOn") повертає
// true
// Виклик функції checkForName("Jason Neis", "Jacob") повертає
// false
// Виклик функції checkForName("Caty Stars", "Caty") повертає
// true
// Виклик функції ("Caty Stars", "cAtY") повертає
// true
// Виклик функції checkForName("Caty Stars", "Andromeda")
// повертає false

// function checkForName(fullName, firstName) {
//   const message = fullName;
//   const message1 = firstName;
//   const tolowercase = message.toLowerCase();
//   const tolowercase1 = message1.toLowerCase();
//   const hasSpan = tolowercase.includes(tolowercase1);
//   return hasSpan;
// }
// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));

//    ----- Методи startsWith() і endsWith() -----

//const str = "Hello, world!";

//console.log(str.startsWith("Hello")); // true
//console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

// const rum = "Василий Іванович";
// rum.startsWith("Василий");
// console.log(rum.startsWith("Вас"));

// const str = "Hello, world!";

// console.log(str.endsWith("world!")); // true
// console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

// const rum = "Василий Іванович";
// console.log(rum.endsWith("Іванович"));

//        !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція checkFileExtension(fileName, ext) приймає
// два параметри:

// fileName - рядок, що зберігає ім'я файлу з розширенням,
//  наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення,
// наприклад, .css, .js тощо
// Доповни код функції так, щоб:

// Якщо ім'я файлу fileName закінчується розширенням,
// зазначеним у параметрі ext, то функція повертала рядок
//  "File extension matches"
// В іншому разі, функція повертала рядок
// "File extension does not match"

// Оголошена функція checkFileExtension(fullname, name)
// Виклик функції checkFileExtension("styles.css", ".css")
//  повертає "File extension matches"
// Виклик функції checkFileExtension("styles.css", ".js")
//  повертає "File extension does not match"
// Виклик функції checkFileExtension("app.js", ".js")
//  повертає "File extension matches"
// Виклик функції checkFileExtension("app.js", ".html")
//  повертає "File extension does not match"
// Виклик функції checkFileExtension("index.html", ".html")
//  повертає "File extension matches"
// Виклик функції checkFileExtension("index.html", ".css")
//  повертає "File extension does not match"
// Виклик функції checkFileExtension("index.html", ".js")
//  повертає "File extension does not match"

// function checkFileExtension(fileName, ext) {
//   const message = fileName;
//   const str1 = message.endsWith(ext);
//   if ((message, str1)) {
//     return `File extension matches`;
//   } else {
//     return `File extension does not match`;
//   }
// }
// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));
// console.log(checkFileExtension("app.js", ".html"));
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("index.html", ".css"));
// console.log(checkFileExtension("index.html", ".js"));

//          ----- Метод indexOf() -----

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8

// const message = "Привіт Андрій ну де ти був!";
// const index = message.indexOf("ну");
// console.log(index);

//       !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути
// з розширенням, наприклад: styles.css, app.js або без,
// наприклад: styles, app.
// Використовуючи методи indexOf та slice,
// доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені
// файлу (назва розширення відокремлюється від імені файла
// крапкою)
// Якщо ім'я файлу не містить розширення,
// то функція повертала новий підрядок,
// що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу,
// але без розширення
// Оголошена функція getFileName(file)
// Виклик функції getFileName("styles.css") повертає "styles"
// Виклик функції getFileName("app.js") повертає "app"
// Виклик функції getFileName("app") повертає "app"
// Виклик функції getFileName("index.js") повертає "index"
// Виклик функції getFileName("index.html") повертає "index"
// Виклик функції getFileName("index.css") повертає "index"
// Виклик функції getFileName("index") повертає "index"

// function getFileName(file) {
//   const string = file;
//   const index = string.indexOf(".");
//   if (index === -1) {
//     return string;
//   } else {
//     return string.slice(0, index);
//   }
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));
// console.log(getFileName("index.html"));
// console.log(getFileName("index.css"));
// console.log(getFileName("index"));

//            ------  Метод trim() -----

//              !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!
// Функція createFileName(name, ext) приймає два параметри:
// name - рядок, що зберігає ім'я файлу без розширення,
// яке вводить користувач. Воно може містити зайві пробіли
// на початку або в кінці рядка, наприклад "order ",
// " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml"
// тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(),
// доповни код функції таким чином, щоб вона повертала повне
// (об'єднане) ім'я файлу з доданим розширенням,
// зазначеним у параметрі ext у форматі ім'я.розширення.
// Також повне ім'я файлу не повинно містити зайвих пробілів
// на початку або наприкінці.

// Оголошена функція createFileName(name, ext)
// Виклик функції createFileName(" order ", "txt")
// повертає "order.txt"
// Виклик функції createFileName("report ", "csv")
// повертає "report.csv"
// Виклик функції createFileName(" presentation", "xml")
// повертає "presentation.xml"

// function createFileName(name, ext) {
//   const firstName = name;
//   const fullName = firstName.trim();
//   return `${fullName}.${ext}`;
// }

// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

//               !!!! ЗАДАЧА З АВТОПЕРЕВІРКИ !!!!

// Функція calculateTotal(number) приймає ціле
// число (параметр number). Доповни код функції так,
// щоб вона повертала суму всіх цілих чисел
// від одиниці до цього числа включно. Наприклад,
// якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(0) повертає 0
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом
// повертає правильне значення

function calculateTotal(number) {
  const count = number;
  const totl = count + 1;
  while (totl) {
    totl += count;
  }
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(0));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());
