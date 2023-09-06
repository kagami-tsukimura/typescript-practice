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
type ProfileR = { name: string; readonly age: number };
type HobbyR = { hobby: string };

const employeeR: ProfileR = {
  name: 'tsukimura',
  age: 29,
};

// readonly error
// employeeR.age = 28;
