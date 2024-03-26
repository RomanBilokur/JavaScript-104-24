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

function checkAccess(subType) {
  const checkAccess = "pro" || "vip";

  return checkAccess;
}

console.log(checkAccess("pro"));
console.log(checkAccess("starter"));
console.log(checkAccess("vip"));
console.log(checkAccess("free"));
