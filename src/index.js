/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
    let resoultWord = ''
     for(let letter of string) {
        if (letter.toLowerCase() === 'z' || letter.toLowerCase() === 'v' ) {
            resoultWord = `${resoultWord}*`
        }
        else {resoultWord = `${resoultWord}${letter}`}
     }

    return resoultWord

};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
    const firstInd = string.indexOf(word);
    const secondIndex = firstInd + word.length;
    const firstHalfOfSentence = string.slice(0, firstInd);
    const secondHalfOfSentence = string.slice(secondIndex);
    return `${firstHalfOfSentence}${newWord}${secondHalfOfSentence}`
 };

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) =>  string.slice(0, length);



/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
    let counter = 0;
    const lowerCaseString = string.toLowerCase()
    for(let i = 0; i < lowerCaseString.length ; i++) {
        if (lowerCaseString[i] === symbol.toLowerCase()){
            counter++;
        }
    };
    return counter;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
    let counter = 0;
    const lowerCaseString = string.toLowerCase();
    const lowerCaseSymbol = symbol.toLowerCase();
    let position = 0;

    while (true) {
        let foundPos = lowerCaseString.indexOf(lowerCaseSymbol, position);
        if (foundPos === -1) break
        position = foundPos +1;
        counter++;
    }
    return counter;
};
