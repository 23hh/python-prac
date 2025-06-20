// https://school.programmers.co.kr/learn/courses/30/lessons/120817

// var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// sum is 6

function solution(numbers) {
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}
