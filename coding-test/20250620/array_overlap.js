// https://school.programmers.co.kr/learn/courses/30/lessons/120583

// 配列を走査し、n と等しい値だけを抽出し、その数を数える。

function solution(array, n) {
  return array.filter((v) => v === n).length;
}
