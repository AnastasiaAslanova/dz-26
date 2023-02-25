let a = 0.2 + 0.3;
console.log (a);
// ---------------------------------------
let b = "1";
let c = 2;
let d = + b;
console.log (d + c);
// ------------------------------------------
let flashCapacity;
const file = 820;
while (true) {
    flashCapacity = prompt(`Вкажіть об'єм Вашої флешки у Гб `);
    if (isNaN(flashCapacity)) {
        alert(`Введить об'єм Вашої флешки просто числом`);
        continue;
    }
break;
}
alert (`На Ващу флешку вмістеться,  ${Math.floor((flashCapacity*1000) / file)} файла(ів)`);
// --------------------------------------------

let sumMany;
let chocolatePrice;

while (true) {
  sumMany = prompt (`Введіть скільки грошей у Вас є`);
    if (isNaN(sumMany)) {
        alert(`Введить кількість гривень просто числом`);
        continue;
    }
   break;
}
while (true) {
    chocolatePrice = prompt(`Введіть скільки коштує одна шоколадка`);
    if (isNaN(chocolatePrice)) {
        alert(`Введить ціну шоколадки просто числом`);
        continue;
    }
    break;
}
alert(`За Ваші гроші можна придбати ${Math.floor(sumMany / chocolatePrice)} шоколадок. У Вас залишиться решта у суммі ${sumMany % chocolatePrice} гривень(і).`);
// ------------------------------------------------

let userNumber;
 while (true) {
     userNumber = prompt(`Введіть трьохзначне число`);
     if (isNaN(userNumber)) {
         alert(`Тільки цифри! Без букв!`);
         continue;
     }
     break;
 }
 Number(userNumber);
const firsDigit = userNumber % 10;
userNumber = Math.floor(userNumber/ 10);
const secondDigit = userNumber % 10;
userNumber = Math.floor(userNumber / 10);
const thirdDigit = userNumber % 10;

alert(`Ваше число навпаки ${firsDigit}${secondDigit}${thirdDigit}`);
// ------------------------------------------------------------------------

let userSumm;
while (true) {
    userSumm = prompt(`Введіть суму вкладу в банк на 2 місяці`);
    if (isNaN(userSumm)) {
        alert(`Тільки цифри! Без букв!`);
         continue;
    }
    break;
}

const profit = 2*((userSumm * 5 /12)/100);
alert(`Сумма нарахованих відсотків буде становити ${profit.toPrecision(3)}%`);

// 2 && 0 && 3  вивдасть 0;
//  2 || 0 || 3  видасть 2;
// 2 && 0 || 3 видасть 3;