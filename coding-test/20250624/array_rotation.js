// https://school.programmers.co.kr/learn/courses/30/lessons/120844

// "right" の場合：最後の要素を先頭に移動
// "left" の場合：最初の要素を末尾に移動
// pop(), shift() と unshift(), push() を組み合わせて実装

function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}
