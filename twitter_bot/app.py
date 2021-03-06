from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from pprint import pprint
import re
import json
import csv


def get_list(bot):
    try:

        # ROOT IMAGE
        # root_img = WebDriverWait(bot, 10).until(
        #     EC.presence_of_element_located((By.CLASS_NAME, "c2iYAv"))
        # )
        # img_a = root_img.find_element_by_class_name("cRjKsc")

        img_img = bot.find_element_by_css_selector("img.c1ZEkM")
        # img_img = img_a.find_element_by_class_name('c1ZEkM')
        img_link = img_img.get_attribute("src")
        print("img link", img_link)
        # ROOT DESKRIPTION
        root_desc = WebDriverWait(bot, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "c3KeDq"))
        )
        # root_desc = bot.find_element_by_class_name("c3KeDq")
        a_tag = root_desc.find_element_by_class_name("c16H9d").find_element_by_tag_name(
            "a"
        )
        # a_tag = root_link.find_element_by_tag_name("a")

        link = a_tag.get_attribute("href")
        # cari title dari tag A
        title = a_tag.get_attribute("title")

        # harga sekarang
        price_now = (
            root_desc.find_element_by_class_name("c3gUW0")
            .find_element_by_tag_name("span")
            .text
        )
        # harga diskon
        root_discount = root_desc.find_element_by_class_name("c3lr34")
        if root_discount.text:
            discount_price = root_discount.find_element_by_class_name("c13VH6").text
            discount_percent = root_discount.find_element_by_class_name("c1hkC1").text
        else:
            discount_price = None
            discount_percent = None
        location = (
            root_desc.find_element_by_class_name("c15YQ9")
            .find_element_by_class_name("c2i43- ")
            .text
        )

        # final
        data = {
            "title": title,
            "link": link,
            "price_now": price_now,
            "location": location,
            "discount_price": discount_price,
            "discount_percent": discount_percent,
            "img_link": img_link,
        }
        return data
    except Exception as ex:
        print(ex)
        return {}


def check_next(bot):
    root = bot.find_element_by_class_name("cpF1IH")
    li_tag = root.find_elements_by_tag_name("li")
    a_tag = li_tag[2].find_element_by_tag_name("a").get_attribute("href")
    return a_tag


def stop_find(bot):
    try:
        not_found = bot.find_element_by_class_name("c1nVRb")
        if not_found:
            return False
        else:
            return True
    except Exception as ex:
        return True


class TwitterBot:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.bot = webdriver.Firefox()

    def login(self):
        bot = self.bot
        bot.get(
            "https://www.lazada.co.id/catalog/?q=jacket&_keyori=ss&from=input&spm=a2o4j.searchlistcategory.search.go.45326184F3RgQ9"
        )
        time.sleep(1.5)

        bot.execute_script(
            "window.scrollTo({top:document.body.scrollHeight-1000,left:0,behavior: 'smooth'})"
        )
        list_p = bot.find_elements_by_class_name("c5TXIP")
        product_list = []
        first_product = map(get_list, list_p)
        with open("jacket.csv", "w", newline="", encoding="utf-8") as csv_file:
            fieldnames = [
                "title",
                "link",
                "price_now",
                "location",
                "discount_price",
                "discount_percent",
                "img_link",
            ]
            writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
            writer.writeheader()
            for list_p in first_product:
                writer.writerow(list_p)

        # product_list.append(list(first_product))

        pagination = check_next(bot)

        next_page = False
        i = 1
        if pagination:
            next_page = True
        while next_page:
            i += 1
            link = re.sub(r"page=(\d)$", f"page={i}", pagination)
            print(link)
            bot.get(link)

            bot.execute_script(
                "window.scrollTo({top:document.body.scrollHeight,left:0,behavior: 'smooth'})"
            )
            time.sleep(5)
            keep_run = stop_find(bot)
            if not keep_run:
                next_page = False
            list_p = bot.find_elements_by_class_name("c5TXIP")
            product = map(get_list, list_p)

            with open("jacket.csv", "a", newline="", encoding="utf-8") as csv_file:
                fieldnames = [
                    "title",
                    "link",
                    "price_now",
                    "location",
                    "discount_price",
                    "discount_percent",
                    "img_link",
                ]
                writer = csv.DictWriter(csv_file, fieldnames)
                for list_p2 in product:
                    if list_p2:
                        # pprint(list_p2)
                        writer.writerow(list_p2)


ed = TwitterBot("farisdewantoro", "emo117")

ed.login()
