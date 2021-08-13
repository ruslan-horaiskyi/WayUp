/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/

console.log('Задание № 1');

let cityName = 'Lviv';
let cityCountry = 'Ukraine';
let cityPopulation = 721301;
let cityStadium = true;
console.log('Город:', cityName + '.','Страна:', cityCountry+ '.','Численность населения:', cityPopulation, 'человек.','Есть стадион?', cityStadium)
console.log('');

/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/

console.log('Задание № 2');

let height = 40,
    width = 70;
    square = height * width;
console.log('Площадь прямоугольника равна', square + 'см.'); // или вот так: console.log('Площадь прямоугольника равна:', square, 'см'); чтобы переменная square осталась числом на выходе
console.log('');

/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/

console.log('Задание № 3');

let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;
let distance = (speedOfFirst + speedOfSecond) * time;
console.log('Города находятся на расстоянии в', distance + 'км друг от друга.')
console.log('');

/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/

console.log('Задание № 4');

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20){
    console.log('randomNubmber: ',randomNumber);
    console.log('randomNumber меньше 20');
} else if (randomNumber > 50){
    console.log('randomNubmber: ',randomNumber);
    console.log('randomNumber больше 50');
} else {
    console.log('randomNubmber: ',randomNumber);
    console.log('randomNumber больше 20, и меньше 50');
}
console.log('');

/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

console.log('Задание № 5');

const randomNumber1 = Math.floor(Math.random() * 100);
switch (true){
    case randomNumber1 < 20 : 
        console.log('randomNumber1: ',randomNumber1);
        console.log('randomNumber1 меньше 20');
    break;
    case randomNumber1 > 50 : 
        console.log('randomNumber1: ',randomNumber1);
        console.log('randomNumber1 больше 50');
    break;
    default : 
        console.log('randomNumber1: ',randomNumber1);
        console.log('randomNumber1 больше 20, и меньше 50');
}


