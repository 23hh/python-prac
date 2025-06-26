// https://school.programmers.co.kr/learn/courses/30/lessons/120887

// i から j までループし、各数字を文字列に変換
// 各文字を1つずつ見て、k と一致する回数をカウントする

function solution(i, j, k) {
  let count = 0;
  for (let n = i; n <= j; n++) {
    count += [...String(n)].filter((char) => char === String(k)).length;
  }
  return count;
}
