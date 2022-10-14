const getPartition = (num: number, maxDigit: number) => {
  let partition = "-";
  const numLen = `${num}`.length;
  return partition.repeat(maxDigit - numLen + 1);
};

export const printArray = (arr: number[], maxDigit: number) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    const num = isNaN(arr[i]) ? 0 : arr[i];
    const partition = getPartition(num, maxDigit);
    str += (i > 0 ? partition : partition.substring(1)) + num;
  }

  return str + "\n";
};

export const printSpiral = (arr: any, largestNumber: number) => {
  let str = "";
  const maxDigit = `${largestNumber}`.length;
  if (typeof arr[0] === "object") {
    arr.forEach((y: number[]) => {
      str += printArray(y, maxDigit);
    });
  } else {
    str += printArray(arr, maxDigit);
  }
  return str;
};
