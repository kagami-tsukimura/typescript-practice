// function
const res = (num: number): number => num;

console.log(res(5));

// generics
const genRes = <T>(arg: T): T => arg;

console.log(genRes<number>(123));
console.log(genRes<string>('hoge'));
