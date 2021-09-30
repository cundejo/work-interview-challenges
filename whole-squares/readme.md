An integer P is a whole square if it is a square of some integer Q; i.e. if P = Q².

Write a function:

function solution(A, B);

That, given two integers A and B, returns the number of whole squares within the interval [A..B] (both ends included).

For example, given A = 4 and B = 17, the function should return 3, because there are three squares of integers
in the interval [4..17], namely 4 = 2², 9 = 3² and 16 = 4².

Write an efficient algorithm for the following assumptions:
- A and B are integers within the range [−2,147,483,648..2,147,483,647];
- A ≤ B.
