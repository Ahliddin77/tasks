// 1-task
let talaba1: [string, number, number] = ["Anvar", 20, 4.5];
let talaba2: [string, number, number] = ["Bobur", 19, 4.8];

//2-task
type DataChecker = (data: number | string) => boolean;

const checkData: DataChecker = (data) => {
  if (typeof data === "number") {
    return data > 0;
  }
  return data.length > 0;
};

//3-task
type DataArray = (string | number | boolean)[];

let data: DataArray = ["salom", 123, true, "typescript", 456, false];
