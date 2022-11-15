function reverseString(str) {
  const splitString = str.split("");
  const regexInt = /^[0-9]+$/;
  const OnlyInt = new Array
  const OnlyStr = new Array

  splitString.map((char) => {
    if (regexInt.test(char)) {
        OnlyInt.push(char)
    } else {
        OnlyStr.push(char) 
    }
  });

  const reverseArray = OnlyStr.reverse();
  reverseArray.push(OnlyInt.toString())
  const joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString("NEGIE1"));
