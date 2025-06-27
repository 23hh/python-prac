// https://school.programmers.co.kr/learn/courses/30/lessons/120896

// 配列を n との距離で比較し、最も近い数を探す
// 距離が同じならより小さい値を返すようにする

function solution(s) {
  return [...s]
    .filter((c) => s.split(c).length - 1 === 1)
    .sort()
    .join("");
}
