// strict
type Mem = { name: string };
const getMemName = (string?: Mem) => {
  // undefined?
  // console.log(string.name);
  console.log(string!.name);
};

getMemName({ name: 'kagami' });

// 割当前に使用？
// let memName: string;
let memName!: string;
const addName = (name: string) => (memName = name);
addName('tsukimura');
console.log(memName);
