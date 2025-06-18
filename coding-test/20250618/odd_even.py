'''
https://school.programmers.co.kr/learn/courses/30/lessons/181935

まず n が奇数か偶数かを判定する
奇数なら：i % 2 == 1 の数を加算
偶数なら：i % 2 == 0 の数の 2乗 を加算する
'''

def solution(n):
    answer = 0
    if n % 2 == 1:
        for i in range(1, n+1, 2):
            answer += i
    else:
        for i in range(2, n+1, 2):
            answer += i**2
    return answer

def solution(n):
    if n % 2 == 1:
        return sum(i for i in range(1, n+1) if i % 2 == 1)
    else:
        return sum(i**2 for i in range(1, n+1) if i % 2 == 0)
