DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone 20", "Electronics", 1000, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cellphone Case", "Phones", 50, 500);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Screen Protector", "Accessories", 5, 100);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Smart Watch", "Electronics", 100, 20);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Charger", "Electronics", 50, 100);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("earbuds", "Electronics", 100, 100);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PS4", "video games", 199, 50);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("XBOX ONE", "video games", 199, 50);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fitness Watch", "Electronics", 100, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bluetooth Speaker", "Electronics", 100, 10);

