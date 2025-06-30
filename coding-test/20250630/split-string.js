// https://school.programmers.co.kr/learn/courses/30/lessons/120913

// i を 0 から my_str.length まで n ずつ増やしながらループ
// slice(i, i + n) で部分文字列を取り出し、配列に追加

function solution(my_str, n) {
  const result = [];

  for (let i = 0; i < my_str.length; i++) {
    result.push(my_str.slice(i, i + n));
  }

  return result;
}
