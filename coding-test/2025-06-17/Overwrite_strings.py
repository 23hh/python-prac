'''
https://school.programmers.co.kr/learn/courses/30/lessons/181943
文字列my_stringのインテックsからoverwrite_stringを上書きし、新しい文字列を返す。
文字列を3つに分けて結合する
1.前半: my_string[:s]
2.中間: overwrite_string
3.後半: my_string[s + len(overwrite_string):]
'''

def solution(my_string, overwrite_string, s):
    answer = my_string[:s] + overwrite_string + my_string[s + len(overwrite_string):]
    return answer