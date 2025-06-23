// https://school.programmers.co.kr/learn/courses/30/lessons/120824

// 偶数なら配列の先頭（0番目）を+1、奇数なら後ろ（1番目）を+1します。

function solution(num_list) {
  var answer = [0, 0];
  for (item of num_list) {
    if (item % 2 == 0) {
      answer[0] += 1;
    } else {
      answer[1] += 1;
    }
  }
  return answer;
}

function solution(num_list) {
  return [
    num_list.filter((x) => x % 2 === 0).length,
    num_list.filter((x) => x % 2 !== 0).length,
  ];
}
