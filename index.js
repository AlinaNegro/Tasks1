//Задача 1. Дано целое неотрицательное число N, определите число десятков в нем (предпоследнюю цифру числа). Если предпоследней цифры нет, то можно считать, что число десятков равно нулю.

// Число десятков определяем так:
let getDozens = (num) => parseInt(num / 10);
getDozens(1322);

// А вот предпоследнюю цифру числа можно так:
let getDozens2 = (num) => {
    if ((num >= 0 && num < 10)) {
        return 0;
    } else {
        return +String(num).slice(-2, -1);
    }
}

getDozens2(81);

//Задача 2. Дано целое трехзначное число. Найдите сумму его цифр.
let getSum = (num) => {
    let hundreds = parseInt(num / 100);
    let dozens = parseInt((num - hundreds*100)/ 10);
    let units = num % 10;
    return hundreds + dozens + units;
};

getSum(123);

//Задача 3. В некоторой школе решили набрать три новых математических класса и оборудовать кабинеты для них новыми партами. За каждой партой может сидеть два учащихся. Известно количество учащихся в каждом из трех классов. Выведите наименьшее число парт, которое нужно приобрести для них. Каждый класс сидит в своем кабинете. Программа получает на вход три целых неотрицательных числа: количество учащихся в каждом из трех классов (числа не превышают 1000).


//Задача 4. Пирожок в столовой стоит A рублей и B копеек. Определите, сколько рублей и копеек нужно заплатить за N пирожков.

//Задача 5. Электронные часы показывают время в формате h:mm:ss (от 0:00:00 до 23:59:59), то есть сначала записывается количество часов, потом обязательно двузначное количество минут, затем обязательно двузначное количество секунд. Количество минут и секунд при необходимости дополняются до двузначного числа нулями. С начала суток прошло N секунд. Выведите, что покажут часы. Формат входных данных: На вход дается натурально число N, не превосходящее 10^7 (10000000).

//Задача 6. Даны значения двух моментов времени, принадлежащих одним и тем же суткам: часы, минуты и секунды для каждого из моментов времени. Известно, что второй момент времени наступил не раньше первого. Определите, сколько секунд прошло между двумя моментами времени. Формат входных данных: Программа на вход получает три целых числа: часы, минуты, секунды, задающие первый момент времени и три целых числа, задающих второй момент времени. Формат выходных данных: Выведите число секунд между этими моментами времени.

//Задача 7. Улитка ползет по вертикальному шесту высотой H метров, поднимаясь за день на A метров, а за ночь спускаясь на B метров. На какой день улитка доползет до вершины шеста? Формат входных данных:  Программа получает на вход целые неотрицательные числа H, A, B, причем H > B. Числа не превосходят 100. Формат выходных данных: Программа должна вывести одно натуральное число. Гарантируется, что A > B.