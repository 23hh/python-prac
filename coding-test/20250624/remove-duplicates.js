// https://school.programmers.co.kr/learn/courses/30/lessons/120888

// 文字列 → Set で重複除去 → 配列化 → join で文字列化 → return

function solution(my_string) {
  return [...new Set(my_string)].join("");
}
