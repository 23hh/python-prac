// https://www.youtube.com/watch?v=RU9B3LHRJLY&list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS&index=9

// 1枚で7人分なので、n ÷ 7 を切り上げて計算する。
// → Math.ceil(n / 7) を使う、または
// → 余りがあればもう1枚追加する

function solution(n) {
  return Math.ceil(n / 7);
}
