from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import pyperclip

from selenium.webdriver.chrome.options import Options

option = webdriver.ChromeOptions()
option.add_argument(r'user-data-dir=C:\Users\lsh61\AppData\Local\Google\Chrome\User Data\Default')

driver = webdriver.Chrome('chromedriver.exe', chrome_options=option)
driver.get('https://nid.naver.com/nidlogin.login?svctype=262144&url=http://m.naver.com/aside/')

time.sleep(2)

# 복붙
pyperclip.copy('아이디')
e = driver.find_element_by_css_selector('#id')
e.send_keys(Keys.CONTROL, 'v')

time.sleep(1)
pyperclip.copy('비번')
e = driver.find_element_by_css_selector('#pw')
e.send_keys(Keys.CONTROL, 'v')

time.sleep(1)
e.send_keys(Keys.ENTER)

time.sleep(2)
driver.get('https://m.blog.naver.com/FeedList.naver')
time.sleep(1.5)
driver.get('https://blog.editor.naver.com/editor?deviceType=mobile&returnUrl=https%3A%2F%2Fm.blog.naver.com%2FFeedList.naver')

time.sleep(1.5)
e = driver.find_element_by_css_selector('.documentTitle_blog .se_textarea')
e.send_keys('블로그 제목')
e = driver.find_element_by_css_selector('.se_editable')
e.send_keys('블로그 내용')
