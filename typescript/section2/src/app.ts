// object
const profile: {
  name: string;
  age: number;
} = { name: 'Kagami', age: 28 };

console.log(profile);

// type
type Profile = { name: string; age: number };
type Hobby = { hobby: string };

const employee: Profile = { name: 'tsukimura', age: 26 };
type Profhobby = Profile & Hobby;
const employeeInfo: Profhobby = {
  name: 'tsukimura',
  age: 26,
  hobby: 'swimming',
};
console.log(employeeInfo.hobby);

// interface
interface ProfileInterface {
  name: string;
  age: number;
}
interface HobbyInterface {
  hobby: string;
}

interface ProfhobbyInterface extends ProfileInterface, HobbyInterface {}

const employeeProfI: ProfhobbyInterface = {
  name: 'kagami',
  age: 28,
  hobby: 'swim',
};
console.log(employeeProfI.hobby);

// readonly
type ProfileAgeR = { name: string; readonly age: number };

const employeeR: ProfileAgeR = {
  name: 'tsukimura',
  age: 29,
};

// readonly error
// employeeAgeR.age = 28;

// as const
const employeeAC = {
  name: 'tsukimura',
  age: 29,
} as const;

// readonly error
// employeeAC.name = 'yukimura';
// employeeAC.age = 28;

// NOTE: 型を指定すると型が優先される
const employeeACT: ProfileAgeR = {
  name: 'tsukimura',
  age: 29,
} as const;

// // do write
// employeeACT.name = 'yukimura';
// // readonly error
// employeeACT.age = 28;
