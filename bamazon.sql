DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
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
VALUES ("Smart Watch", "food", 100, 5000);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla", "food", 100, 5000);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla", "food", 100, 5000);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla", "food", 100, 5000);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla", "food", 100, 5000);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla", "food", 100, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vanilla", "food", 100, 5000);
