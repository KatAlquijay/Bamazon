CREATE DATABASE IF NOT EXISTs Bamazon;
USE Bamazon;

CREATE TABLE products (
item_id INT AUTO_INCREMENT,
product_name VARCHAR(20),
department_name VARCHAR(20),
price DECIMAL,
stock_quanity INT,
PRIMARY KEY  (id)
);

Select * FROM products;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gift Bags", "Party", 2.00, 50),
		("Scented Candles", "HBC", 5.00, 80),
        ("Colored Pencils", "Stationary", 3.00, 100),
        ("Super Glue", "Hardware", 1.00, 30),
        ("Duct Tape", "Hardware", 3.00, 45),
        ("Cat Food". "Pet Supply", 5.00, 65);
