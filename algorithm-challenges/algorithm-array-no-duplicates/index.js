const noDuplicates = (arr) => {
  return arr.reduce(
    (acc, item) => (acc.includes(item) ? acc : [...acc, item]),
    []
  );
};

console.log(noDuplicates([1, 2, 2, 3, 4, 5, 3, 4]));
