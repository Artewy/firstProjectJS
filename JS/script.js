// -------------------- lesson 1 -------------------- 

"use strict";
// новая директива, современный код

let numberLesson1 = 5;
// let - объявление переменной (let), имя (number), присваивание (=), значение (5)
const leftBorderWidth = 1;
// leftBorderWidth = 2;
console.log(leftBorderWidth);
// ширина левой границы 
// Переменная может начинаться с букв, нижнего подчеркивания и доллара, также нельзя использовать слова error, alert и тд (зарезервированные)
// console.log(1);
let number = 11;
number = 10;
console.log(number);

const obj = {
    a: 50
};
obj.a = 10;
console.log(obj);
// прямых констант не бывает!


// var name = 'Ivan' старый метод переменной, существует до того, как была объявлена в коде (Поднятие (hoisting))


// особенность let:
{
    let result = 50;

console.log(result); }
// будет ошибка, работает внутри скобок


// less2

// Styles:
// snake_case
// UPPER_SNAKE_CASE
// Kebab-case -- папки, файлы
// PascalCase -- классы
// camelCase -- переменные

let vehicleBodyWidth = 5000;
let vehicleBodyLength = 4000;

vehicleBodyWidth = 5000;
vehicleBodyLength = 4000;
console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);


// homework_1

// Создайте переменную, которая будет отображать имя пользователя. (Пользователь - user, имя - name). В неё поместите значение "John"
// На следующей строке создайте переменную, отображающую номер пользователя (номер - number). В неё поместите значение 25.
// Измените значение второй переменной с 25 на 24 на следующей строке.

const userName = "John";
let userNumber = 25;
userNumber = 24;





// -------------------- lesson 2 -------------------- 

// Типы данных в JS:
// Простые типы:

// Числа 1, 2, 3 (Infinity (+/-) - console.log(4/0), Not a Number - NaN - нет мат логики)
let numberLesson2 = 4.6;
console.log(4/0);
console.log('string' * 9);

// Строки 'string', "name", либо тильда `name`
const person = "Alex";

// Логический тип (boolean) true/false
const bool = true;

// null - не существует
let something;
console.log(something);

// undefined - существует, но нет значения
let und;
console.log(und);

// Symbol

// BigInt - большие числа (> 2^53 - 1)



// Объекты (комплексные):
const object = {
    name: "John", // ключ + значение
    age: 25,
    isMarried: false
};

console.log(object.name);
console.log(object["name"]);

// 1) Спец. объекты 2) Обычные объекты

// Массивы [] ЧАСТНЫЙ СЛУЧАЙ ОБЪЕКТА
let array = ['plum.png', 'orange.jpeg', 'apple.bmp', 6, [], {}];
console.log(array[1]); // только значение, нет ключа (он фиксирован, задан по умолчанию)
console.log(array[0]);
console.log(array[4]);

// Function


// Объект даты


// Регулярные выражения


// Ошибки


// -------------------- lesson 3 -------------------- 

// Разница между массивами и объектами
const arr = [1, 2, 3]; // Перечень информации по порядку
const arrObj = {
    a: 1,
    1: 2,
    2: 3
};

console.log(arr[1]);
console.log(arrObj.a);
console.log(arrObj[1]);

arrObj.bounty = '1337';
arrObj['bountyR'] = '228';
console.log(arrObj['bounty']); // Указание свойства, а не переменной
console.log(arrObj.bounty); // Обращение к свойству
console.log(arrObj['bountyR']);

// Можно и так, главное, чтобы переменная уже существовала
const b = 'b' // Если есть переменная, которая содержит определенное значение
// По сути, это динамические данные в объекте. В массиве можно также, но...
arr[10] = '345678';
console.log(arr[10]); // Нарушает логику, в массиве будет 7 пустых элементов
// Да, можно, но не нужно.

arrObj[b] = '1234'; // То можно ее использовать, чтобы создать новое свойство
console.log(arrObj['b']);
console.log(arrObj[b]);

// Внутри объектов можно создавать вложенные структуры (пример-фильмы/жанры):
const arrayObjectLess3 = {
    a: 'a',
    '1': 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};


const objectLess3 = {a: 1, c: 2}; // Структура хранения данных в парном формате

const objectLesson3 = {
    'Anna': 500,
    'Alice': 800
};

// Вот так плохо!  ['Anna', 500, 'Alice', 800]


// homework_2

/* Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.
Создайте объект под названием storeDescription
во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. 
Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте
Во внутрь объекта storeDescription напрямую поместите свойство employees. 
Это должен быть массив, который содержит имена трех сотрудников на ваш выбор
Во внутрь объекта storeDescription напрямую поместите свойство products. 
Это должен быть тоже объект, который содержит два товара и их цену. 
То есть, нужно создать пару ключ-значение в виде товар: цена. Данные на ваш выбор.
Во внутрь объекта storeDescription напрямую поместите свойство open. 
Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение. Сделайте его открытым
*/

const storeName = "YSN";
const storeDescription = {
    budget: 10000,
    employees: ['Dasha', 'Artyom', 'Arseny'],
    products: {
        potatoes: 80,
        tomatoes: 150,
    },
    open: true
};

console.log(storeDescription['budget']);



// -------------------- lesson 4 -------------------- 

alert('Hello') // Встроенное в браузер окно. Предупреждение пользователя

const result = confirm('Are u here?'); // Такое же окно с двумя вариантами ответа
console.log(result); // Запись результата true/false в консоль
const answer1 = prompt('Вы программист?', '');
console.log(typeof(answer1)); // Узнать тип данных
// Вся информация, приходящая от пользователя - СТРОКА!

const answer2 = +prompt('Вы программист?', ''); // Динамическая типизация
// Преобразование типа данных в число

const answer3 = prompt('Вы программист?', '');
console.log(typeof(answer3 + 5)); // Сложение строк: 10+5=105

const answer4 = +prompt('Вы программист?', '');
console.log(typeof(answer4 + 5)); // Сложение чисел: 10+5=15


// Зададим список вопросов, поместив их в массив
const answers = [];
answers[0] = prompt('Ваше имя', ''); // prompt существует в браузере!
answers[1] = prompt('Ваше фамилия', ''); // Это не переменная
answers[2] = prompt('Ваше отчество', ''); // Также с alert, confirm

document.write(answers); // Замена содержимого на то, что выводим
/* Однако 'Hello world' останется, т.к тег body пуст, не сформирован.
prompt, alert, confirm блокируют построение страницы до их выполнения
*/
console.log(typeof(answers)); // Объект! т.к массив - частный случай
// Однако есть ошибка console.log(typeof(null)); - выведет object



// -------------------- lesson 5 (13) -------------------- 
// Интерполяция

const category = 'toys';

console.log('https://someurl.com/' + category + '/' + '4'); // Не круто

// Используем интерполяцию
console.log(`https://someurl.com/'${category}/5`); // Такой же результат

// Кавычки ТОЛЬКО ЧЕРЕЗ ТИЛЬДУ (бэктики)
const user = 'Artyom';
alert(`Привет, ${user}`);

// -------------------- lesson 6 (14) -------------------- 
// Операторы js

// Сложение

console.log('array' + " — object") // Сложение строк = 'array — object'
console.log('array' + +" — object") // Сложение строки с числом (унарный плюс) = 'NaN'
console.log('4' + +"5") // Сложение строки с числом (унарный плюс) = '45'
console.log('4' + 5) // Сложение строки с числом = '45'
console.log(4 + 5) // Сложение числа с числом = '9'

// Инкремент и декремент

let incr = 10,
    decr = 10;

incr++; // Увеличение на единицу (постфиксная форма записи). Префиксная '++incr;'
decr--; // Уменьшение на единицу (постфиксная форма записи). Префиксная '++decr;'

/* Разница в том, что при использовании постфиксной формы СРАЗУ (например, в console.log),
то она вернет старое значение. Использовал -> Старое значение -> Увеличение/уменьшение
Префиксная сразу же меняет. ТО ЕСТЬ:

ПРЕФИКСНАЯ форма возвращает новое значение, 
в то время как ПОСТФИКСНАЯ форма возвращает старое (до увеличения/уменьшения числа).
*/

console.log(incr);
console.log(decr);

// Остаток от деления

console.log(5%2); // 1

// Равенство (==), ПРИСВАИВАНИЕ (=)

console.log(2*4 == 8); // true, сравнение ПО ЗНАЧЕНИЮ, а не по типам данных. можно сравнить число со строкой
console.log(2*4 === '8'); // Строгое сравнение (с типами данных). false

// Оператор И (&&)
// Оператор ИЛИ (||)
// Отрицание

const isChecked = true,
      isClose = true;


console.log(isChecked && isClose); // true; 'isClose' = true, but '!isClose' - false





// -------------------- lesson 7 (15) -------------------- 

/* Система контроля версий Git. Сервис GitHub

Курс git — https://githowto.com/ru
git init — инициализация репозитория
*/


// -------------------- lesson 8 -------------------- 



// -------------------- lesson 9 -------------------- 



// -------------------- lesson 10 -------------------- 



// -------------------- lesson 11 -------------------- 
