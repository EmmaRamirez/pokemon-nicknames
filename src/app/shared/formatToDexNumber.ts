export const formatToDexNumber = (n: number): string => {
  let targetLength = 3;
  const padString = '0';
  let str = n.toString();

  if (str.length > targetLength) {
    return str;
  } else {
    targetLength = targetLength - str.length;
    if (targetLength > str.length) {
      str += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(str);
  }

};
