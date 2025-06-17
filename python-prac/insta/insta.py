from selenium import webdriver
from selenium.webdriver.common.keys import Keys 
import time
import urllib.request

driver = webdriver.Chrome('chromedriver.exe')
driver.get('https://www.instagram.com/')

# time.sleep(2)
# id = #
# name = 'input[name="username"]'
# e = driver.find_element_by_css_selector('._ab37').text
# print(e)

time.sleep(2)
e = driver.find_element_by_css_selector('input[name="username"]')
e.send_keys('아이디')
e = driver.find_element_by_css_selector('input[name="password"]')
e.send_keys('비번')
e.send_keys(Keys.ENTER)

time.sleep(4)
driver.get('주소')
driver.implicitly_wait(10)
driver.find_element_by_css_selector('._aabd').click()

for i in range(50):
    #사진저장
    image = driver.find_element_by_css_selector('._aatk .x5yr21d').get_attribute('src')
    urllib.request.urlretrieve(image, f'{i}.jpg')
    #다음
    e = driver.find_element_by_css_selector('._aaqg')
    driver.execute_script('arguments[0].click();', e)