type User = {
  id: number;
  name: string;
  age: number;
  hobby: string;
};

// Pick
type UserNameAge = Pick<User, 'name' | 'age'>;

// Partial
type UserPartial = Partial<User>;
