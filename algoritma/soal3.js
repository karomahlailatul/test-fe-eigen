const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

const output = (INPUT, QUERY) => {
  const temp = new Array;
  QUERY.forEach((query) => {
    let count = 0;
    INPUT.forEach((input) => {
      if (query === input) {
        count++;
      }
    });
    temp.push(count);
  });
  return temp
};

console.log(output(INPUT, QUERY));
