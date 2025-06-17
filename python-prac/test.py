list1 = ['삼성전자', '카카오', '네이버', '신풍제약']

for i in list1:
    a = open('a.txt', 'a')
    a.write(i)
    a.close()

for x in range(1,10):
    for c in range(1,10):
        print(x, '+', c, '=', x * c)