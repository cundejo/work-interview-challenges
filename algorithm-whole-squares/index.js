function solution(A, B) {
    let a = A,
        b = B;
    if (A < 0 && B < 0) {
        b = Math.abs(A);
        a = Math.abs(B);
    }

    let countingSquares = 0;
    const sqrtA = Math.sqrt(a);
    let i;
    if (sqrtA % 1 === 0) {
        i = sqrtA;
    } else {
        i = Math.floor(sqrtA) + 1;
    }

    while (true) {
        if (i * i > b) return countingSquares;
        countingSquares++;
        i++;
    }
}

// console.log(solution(4, 17));
console.log(solution(0, 4));
// console.log(solution(-17, -4));