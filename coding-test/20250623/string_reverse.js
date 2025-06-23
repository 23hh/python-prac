// https://school.programmers.co.kr/learn/courses/30/lessons/120822

// 文字列を配列に変換して .reverse() を使う
// 最後に .join("") で再び文字列にする

function solution(my_string) {
  return my_string.split("").reverse().join("");
}
