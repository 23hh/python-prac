// https://school.programmers.co.kr/learn/courses/30/lessons/120585

// 配列を捜査して、heightより大きい要素だけを抽出し、
// その個数を数える。

function solution(array, height) {
  return array.filter((x) => x > height).length;
}
