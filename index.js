// 1. создание массива подарков и вывод на экран
let gifts = ['Книга', 'Игрушка', 'Шоколад'];

function printGifts(giftsArray) {
    console.log("Текущий список подарков:");
    for (let i = 0; i < giftsArray.length; i++) {
        console.log(`Подарок #${i + 1}: ${giftsArray[i]}`);
    }
    console.log("------------------------");
}

// 2. вызов функции массива
printGifts(gifts);

// 3. Добавляем новый подарок 
gifts.push('Смартфон');
printGifts(gifts);

// 5. Изменяем второй подарок (индекс 1)
gifts[1] = 'Конструктор';
printGifts(gifts);

// 4. Удаление первого порядка и вывод на экран
gifts.shift();
printGifts(gifts);
