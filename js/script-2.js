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

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  checkPassword === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}

console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));
