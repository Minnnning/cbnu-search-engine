from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from bs4 import BeautifulSoup
import time
import json
import datetime

# Config 파일에서 드라이버 경로 읽기
with open('../../config.json', 'r') as config_file:
    config = json.load(config_file)
    driver_path = config['driver_path']

class NoticeScraper:
    def __init__(self, url, site, category, notice_list_selector, notice_contents_selector):
        self.url = url
        self.site = site
        self.category = category
        self.notice_list_selector = notice_list_selector
        self.notice_contents_selector = notice_contents_selector
        self.driver = self._init_driver()

    def _init_driver(self):
        firefox_options = Options()
        firefox_options.add_argument("--headless")
        firefox_options.add_argument("--no-sandbox")
        firefox_options.add_argument("--disable-dev-shm-usage")
        service = Service(executable_path=driver_path)  # geckodriver 경로 설정
        driver = webdriver.Firefox(service=service, options=firefox_options)
        return driver

    def get_notice_list(self):
        self.driver.get(self.url)
        time.sleep(2)  # 페이지 로딩 대기

        list_items = self.driver.find_elements(By.CSS_SELECTOR, self.notice_list_selector)
        notices = []
        current_year = datetime.datetime.now().year
        for item in list_items:
            td = item.find_elements(By.TAG_NAME, "td")
            if not td or len(td) < 4:
                continue

            title_element = item.find_element(By.CSS_SELECTOR, "a[href*='post']")
            raw_date = td[3].text.strip()

            # 날짜 형식 처리
            if ":" in raw_date:
                date = datetime.datetime.now().strftime("%Y-%m-%d")
            else:
                date = f"{current_year}-{raw_date}"

            notice = {
                "site": self.site,
                "category": self.category,
                "title": title_element.text.strip(),
                "url": title_element.get_attribute("href").strip(),
                "date": date
            }
            notices.append(notice)
        
        return notices

    def get_contents_html(self, url):
        self.driver.get(url)
        time.sleep(2)  # 페이지 로딩 대기
        contents_element = self.driver.find_element(By.CSS_SELECTOR, self.notice_contents_selector)
        return contents_element.get_attribute('outerHTML')

    def get_contents_text(self, url):
        html_content = self.get_contents_html(url)
        soup = BeautifulSoup(html_content, 'html.parser')
        return soup.get_text(separator="\n").strip()

    def close(self):
        self.driver.quit()

if __name__ == "__main__":
    # 경제학과 공지사항 설정
    url = "https://econ.chungbuk.ac.kr/board/department_notice"
    site = "경제학과"
    category = "학부공지"
    notice_list_selector = "#fboardlist > table > tbody > tr"
    notice_contents_selector = "#post-content"

    scraper = NoticeScraper(url, site, category, notice_list_selector, notice_contents_selector)
    notice_list = scraper.get_notice_list()
    for notice in notice_list:
        print(f"Title: {notice['title']}")
        print(f"URL: {notice['url']}")
        print(f"Date: {notice['date']}")
        contents_text = scraper.get_contents_text(notice['url'])
        print(f"Contents:\n{contents_text}")
    scraper.close()
    print("close")
