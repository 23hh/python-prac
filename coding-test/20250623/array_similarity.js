// https://school.programmers.co.kr/learn/courses/30/lessons/120903

// filter() を使って、s1 の中で s2 に含まれる要素を抽出し

// その数（長さ）を返す

function solution(s1, s2) {
  return s1.filter((x) => s2.includes(x)).length;
}

function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}
