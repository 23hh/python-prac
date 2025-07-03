// https://school.programmers.co.kr/learn/courses/30/lessons/120835

// 1. emergency を降順にコピーして sorted とする
// 2. 元の配列の各値について、sorted.indexOf(値) + 1 を計算
// 3. 配列として返す

function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
