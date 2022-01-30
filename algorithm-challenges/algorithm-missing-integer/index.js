function solution(A) {
  const aSorted = A.sort((a, b) => a - b);

  if (aSorted[0] !== 1) return 1;

  if (aSorted[aSorted.length - 1] < 1) return 1;

  let number = 1;
  let i = 0;
  while (i < 10) {
    if (number < aSorted[i]) return number;

    if (!aSorted[i]) return number++;

    number = aSorted[i] + 1;
    i++;
  }
}

console.log(solution([1, 3, 6, 4, 1, 2]));
// solution([1, 2, 3]);
