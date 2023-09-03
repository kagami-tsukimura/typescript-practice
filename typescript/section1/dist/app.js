// Live Server test
const message = 'hogehoge';
console.log(message);
// variable
const myName = 'Kagami';
let age = 27;
age = 28;
const male = true;
// array
const hobbies = ['Programming', 'Penguin'];
hobbies.push('Swim');
const likeNums = ['1', 7];
likeNums.push(5);
const freeMessages = ['hoge', 123, false];
// function
const firstName = 'Kagami';
const lastName = 'Tsukimura';
const strCombines = (str1, str2) => `${str1} ${str2}`;
console.log(`My name is ${strCombines(firstName, lastName)}.`);
const sumResult = (num1, num2) => num1 + num2;
console.log(sumResult(1, 2));
const optionalRes = (str, num) => console.log(str, num);
optionalRes('penguin');
optionalRes('penguin', 300);
const defaultRes = (noun, adjective = 'lovely') => console.log(`${noun} is ${adjective}.`);
defaultRes('Penguin');
defaultRes('Bird', 'likely');
const animalsRes = (...likeAnimals) => {
    likeAnimals.map((animal) => console.log(animal));
};
animalsRes('Penguin', 'Hummingbird', 'Cat');
// cast
const num1 = 123;
const inputVal = '123';
console.log(num1 + inputVal);
console.log(num1 + Number(inputVal));
//# sourceMappingURL=app.js.map