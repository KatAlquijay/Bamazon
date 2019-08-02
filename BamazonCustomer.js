var inquirer = require('inquirer');
var mysql = require("mysql");
var cTable = require('console.table');

var connection = msql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "Codename2563"
    database: "bamazon_db";
});

connection.connect(funvtion(err) {
    if (err) throw err;

    console.log("-----------------------");
    console.log('Welcome to BAmazon');
});


function allItems () {
    connection.query ("SELECT * FROM products", funtion (err,res) {
        console.log('These are the list of items we have available. Which items do you wish to purchase?')
        console.log("-------------------");
        for (var i = 0; i < res.length; i++);
        console.log(res[i].id + "|" + res[i.product_name + "|" + res[i].department_name + "|" + res[i].price + "|" + res [i].stock_quantity);
    })
}

function begin () {
    inquirer.prompt ([
        {
            name: "Id Number",
            type: "input",
            message: "Please enter the ID number of the item you wish to order.",
        },
        {
            name: "quanity",
            type: "number",
            message: "How many wold you like to purchase?",
        },
    ])
    .then(function(answer) {
        var quanity = answer.quanity;
        var itemID = asnwer.id;
        connection.query("SELECT * FROM products WHERE id ?" + itemID, function (err, res) {
            if (err) throw err;
            if (res[0].stock_quanity >=0) {
                console.log("Quanity in Stock:" + res[0].stock_quanity + "\nOrder Quanity: " + quanity);
                console.log("Your total is: " + (answer.quantity * res[0].price) + " dollars.");
                connection.query("UPDATE products SET stock_quantity ? WHERE id ?", [res[0].stock_quantity - quantity, itemId],
                function (err, res) {
                    if (err) throw err;
                    queryAllProducts();
                });
            }

            else {
                console.log("Insufficient quantity! \nCurrent quantity: " + res[0].stock_quantity + "\nOut of Stock");
                queryAllProducts();
            }
        });
    });
};