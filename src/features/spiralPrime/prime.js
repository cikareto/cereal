export const isPrime = (num) => {
  if (num > 2 && num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

export const getPrime = (size) => {
  if (size === 0) return [];

  let count = 0,
    num = 3;
  const prime = [2];
  while (count < size - 1) {
    if (isPrime(num)) {
      prime.push(num);
      count++;
    }
    num += 2;
  }

  return prime;
};
