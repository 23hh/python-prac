'''
https://school.programmers.co.kr/learn/courses/30/lessons/181942

2つの文字列の長さが同じなので、
for文でインテックを回してstr1[i] + str2[i]を順番に結合すればよい。
'''

def solution(str1, str2):
    answer = ''
    for i in range(0, len(str1)):
        answer = answer + str1[i] + str2[i]
    return answer