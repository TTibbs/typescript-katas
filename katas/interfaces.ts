interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

export const createPerson = (
  name: string,
  age: number,
  isStudent: boolean
): Person => {
  return {
    name,
    age,
    isStudent,
  };
};
