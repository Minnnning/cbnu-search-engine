from 한빛식당 import restaurant_hanbit
from 별빛식당 import restaurant_byulbit
from 은하수식당 import restaurant_eunhasu
import pymysql, json

# 매주 토요일에 개신
# DB 설정 데이터 가져오기
with open('config.json', 'r') as config_file:
    config = json.load(config_file)
    driver_path = config['driver_path']
    hosturl = config['host']
    username = config['username']
    userpassword = config['password']
    dbname = config['db2']

table_N = 'menus'

# MariaDB 연결
db_connection = pymysql.connect(host=hosturl, user=username, password=userpassword, db=dbname, charset='utf8')
cursor = db_connection.cursor()

if __name__ == "__main__":
    # 기존 데이터 삭제
    try:
        delete_sql = f"DELETE FROM {table_N};"
        cursor.execute(delete_sql)
        db_connection.commit()
        print("Old data deleted successfully.")
    except pymysql.Error as e:
        print(f"Error deleting data: {e.args[0]}, {e.args[1]}")
        db_connection.rollback()

    # 새로운 데이터 추가
    restaurants = [restaurant_hanbit, restaurant_byulbit, restaurant_eunhasu]

    for restaurant in restaurants:
        menus = restaurant.run()
        for menu in menus:
            try:
                # 데이터베이스에 저장
                sql = f"INSERT INTO {table_N} (restaurantId, restaurant_name, menu, time, date) VALUES (%s, %s, %s, %s, %s)"
                values = (menu['restaurantId'], menu['restaurant_name'], menu['menu'], menu['time'], menu['date'])
                cursor.execute(sql, values)
                db_connection.commit()
                print(f"Data inserted successfully: restaurant_name={menu['restaurant_name']}, date={menu['date']}")
            except pymysql.Error as e:
                print(f"Error inserting data: {e.args[0]}, {e.args[1]}")
                db_connection.rollback()

    # WebDriver 및 DB 연결 닫기
    db_connection.close()
    print("Weekly menu update completed.")
