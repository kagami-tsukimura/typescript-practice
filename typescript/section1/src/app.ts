// Live Server test
const message: string = 'hogehoge';
console.log(message);

// variable
const myName: string = 'Kagami';
let age: number = 27;
age = 28;
const male: boolean = true;

// array
const hobbies: string[] = ['Programming', 'Penguin'];
hobbies.push('Swim');
const likeNums: (string | number)[] = ['1', 7];
likeNums.push(5);
const freeMessages: [string, number, boolean] = ['hoge', 123, false];

// function
const firstName: string = 'Kagami';
const lastName: string = 'Tsukimura';
const strCombines = (str1: string, str2: string) => `${str1} ${str2}`;
console.log(`My name is ${strCombines(firstName, lastName)}.`);
const sumResult = (num1: number, num2: number) => num1 + num2;
console.log(sumResult(1, 2));

const optionalRes = (str: string, num?: number) => console.log(str, num);
optionalRes('penguin');
optionalRes('penguin', 300);
const defaultRes = (noun: string, adjective: string = 'lovely') =>
  console.log(`${noun} is ${adjective}.`);
defaultRes('Penguin');
defaultRes('Bird', 'likely');
const animalsRes = (...likeAnimals: string[]) => {
  likeAnimals.map((animal) => console.log(animal));
};
animalsRes('Penguin', 'Hummingbird', 'Cat');

// cast
const num1: number = 123;
const inputVal: string = '123';
console.log(num1 + inputVal);
console.log(num1 + Number(inputVal));
