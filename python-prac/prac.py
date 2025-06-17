import requests
from bs4 import BeautifulSoup


# data = requests.get('https://finance.naver.com/item/sise.nhn?code=005930')
#
# # print(data.content)
# # print(data.status_code)
#
# soup = BeautifulSoup(data.content, 'html.parser')
# print(soup.find_all('strong', id='_nowVal')[0].text)
#
# # 글자 깨져있을 때
# print(soup.find_all('em', class_='no_down')[0].text)
#
# # class, id 하나도 없을 때
# # class는 .
# # id는 #
# soup.select('.f_down em')
#
# #이미지
# img = soup.select('#img_chart_area')[0]
# print(img['src'])


def test(number):
    data = requests.get(f'https://finance.naver.com/item/sise.nhn?code={number}')

    soup = BeautifulSoup(data.content, 'html.parser')
    print(soup.find_all('strong', id='_nowVal')[0].text)
    print(soup.find_all('span', class_='tah')[5].text)
    return soup.find_all('strong', id='_nowVal')[0].text


list1 = ['066575', '005930']

f = open('a.txt', 'w')

for i in list1:
    print(i)
    f.write('\n' + test(i))

f.close()
