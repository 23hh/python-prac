import os

# 파일들
#그리고 만드는 프로그램의 안정성을 위해서 상대경로보다 절대경로로 작성하는게 좋습니다. 
#나중에 윈도우에서 작업스케줄러라고 자동으로 매일 아침 프로그램 실행해주는 툴이 있는데
#그걸로 작업 자동화 나중에 하시려면 파이썬 파일에 있는 경로는 거의 다 절대경로로 바꾸는게 좋습니다. 안그러면 에러남 
file = os.listdir('')

# 파일명변경(경로/왼->오)
os.rename('test/1.txt', 'test/4.txt')

for i in os.listdir('test'):
    os.rename(f'test/{i}.txt', f'test/a{i}.txt')

# 파일복사(경로/왼->오)
import shutil

for i in os.listdir('test'):
    shutil.copy(f'test/{i}.txt', f'test2/{i}.txt')

#경로함수(경로1+경로2합침)
os.path.join('경로', '경로2')
#절대경로출력
os.getcwd()