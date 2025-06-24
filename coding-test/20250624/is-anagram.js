// https://school.programmers.co.kr/learn/courses/30/lessons/120886

// 両方の文字列をソートして比較する

function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
