// https://school.programmers.co.kr/learn/courses/30/lessons/120894

// 1. 英語の数字と実際の数字を対応させる辞書を作る
// 2. 文字列内の各英単語を replaceAll で数字に変換
// 3. 数字文字列を整数にして返す

function solution(numbers) {
  const numberMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  for (const key in numberMap) {
    numbers = numbers.replaceAll(key, numberMap[key]);
  }

  return Number(numbers);
}
