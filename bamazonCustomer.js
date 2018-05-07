var mysql = require('mysql');
var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
  });
  
  //displays the store
  function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        const result = res;
    for (var i = 0; i < result.length; i++){
        console.log("ID: " + result[i].id);
        console.log("Product: " + result[i].product_name);
        console.log("Price: " + result[i].price);
        console.log("------------------------");
    }
    runProducts();
  });
}

//asks user for item and amount to purchase, then prints it
  function runProducts() {
    inquirer
      .prompt([
        {
        name: "id",
        type: "list",
        message: "Enter the ID of the product you would like to buy",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]
      },
      {name: "quantity",
        type: "input",
        message: "How many units would you like to buy?"
      }
    ])
    .then(function(answer) {
      var quant = "SELECT stock_quantity FROM products";
      console.log(answer.quantity);
      console.log(quant);
    if (answer.quantity < quant) {
      console.log("************************");
      console.log("Thank you for your purchase!!!");
      console.log(answer);
      console.log("************************");
    } else {
      console.log('Insufficient Quantity');
      connection.end();
      return "";
    }
      connection.query(
        "Update products SET stock_quantity = stock_quantity - ? where id = ? ",
        [parseInt(answer.quantity), answer.id],
        function(err, response) {
          if (err) {
            console.log(err);
          }
        });
        proceed();
    });

//runs the prompt to stop and show what has been bought
    function proceed() {
      inquirer
        .prompt([
          {
          name: "proceed",
          type: "list",
          message: "to proceed press",
          choices: ["ENTER"]
        }
    ])
    .then(function(answer) {
        updateDisplay();
    });
  }

  //Displays the store quantities after purchase
    function updateDisplay() {
      console.log("Selecting the new items with the total price of the items..\n");
      connection.query(
        "SELECT product_name, price, stock_quantity, (price * stock_quantity) as totalPrice FROM products",
        function(err, response) {
          if (err) {
            console.log(err);
          }
          for (var i = 0; i < response.length; i++) {
            console.log(
              "-------------------------" + '\n' +
                "Item: " + response[i].product_name + '\n' +
               "| Price: " +
                response[i].price + '\n' +
                "| Stock_quantity: " +
                response[i].stock_quantity + '\n' +
                "| TotalPrice: " +
                response[i].price + '\n' +
                "-------------------------"
            );
          }
         
        }
      );
    }
}